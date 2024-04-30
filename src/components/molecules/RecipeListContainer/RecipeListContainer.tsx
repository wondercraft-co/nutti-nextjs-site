import { recipesIngredients } from "@/utils/constants";
import Link from "next/link";
import RecipesList from "../RecipesList";
import { Recipe, sanityClient } from "@/utils/sanity";
import { cn } from "@/utils";

interface IRecipeListContainerProps {
  tag?: string;
}

const RecipeListContainer = async ({ tag = "" }: IRecipeListContainerProps) => {
  const tagSearch = tag
    ? " && $keyword in ingredients[].ingredient->slug.current"
    : "";
  const recipes = await sanityClient.fetch<Recipe[]>(
    `*[_type == "recipe" ${tagSearch}] {
      ...,
      ingredients[]{
        ingredient->{_id, name, slug},
        "name": ingredient->name,
        number, unit
      },
      description[] {
        ...,
      },
      image {
        asset->{
            ...,
            metadata
          }
        }
      }`,
    {
      keyword: tag,
    },
    {
      next: { revalidate: 120 },
    }
  );
  return (
    <>
      <div className="bg-b-orange text-b-red-dark pb-14 pt-32 md:pt-40">
        <div className="container px-5">
          <h1 className="pb-5 font-serif text-5xl font-semibold">
            Recetas Nutti
          </h1>
          <div className="mb-4 flex gap-5 font-semibold hidden">
            Cuál de las cremas Nutti tienes?
          </div>
          <div className="hidden">
            <ul className="flex flex-wrap gap-2">
              {recipesIngredients.map((product) => (
                <li key={product.slug}>
                  <Link
                    className={cn(
                      "bg-b-back hover:bg-b-yellow relative z-10 whitespace-nowrap rounded-full px-3 py-1 font-semibold text-black",
                      {
                        "bg-b-yellow": tag === product.slug,
                      }
                    )}
                    href={
                      tag === product.slug
                        ? "/recetas"
                        : `/recetas/${product.slug}`
                    }
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="container pt-10">
        <RecipesList recipes={recipes} />
      </div>
    </>
  );
};
export default RecipeListContainer;

/*
*[_type == "recipe"] {
  title, ingredients, "xxx": ingredients[]{
    ingredient->{_id, name},
    "name": ingredient->name,
    number, unit

  }
}

*[_type == "recipe" ] {
  ...,  ingredients[]{
    "name": ingredient->name,
    number, unit
  }
}

*[_type == "recipe" && $keyword in ingredients[].ingredient->name ] {
  ...

}

*[_type == "recipe" && ("banana" in ingredients[].ingredient->name && "strawberry" in ingredients[].ingredient->name)] {
  ...,
  ingredients[]{
    "name": ingredient->name,
    number,
    unit
  }
}
*/
