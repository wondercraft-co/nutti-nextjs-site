import MainLayout from "@/components/molecules/MainLayout";
import RecipesList from "@/components/molecules/RecipesList";
import { Recipe, sanityClient } from "@/utils/sanity";
import Link from "next/link";

const products = [
  {
    name: "Maní",
    slug: "mani",
  },
  {
    name: "Almendras",
    slug: "almendras",
  },
  {
    name: "Marañón",
    slug: "maranon",
  },
  {
    name: "Marañón Cocoa & Especias",
    slug: "maranon-cocoa-especias",
  },
  {
    name: "Macadamia",
    slug: "macadamia",
  },
  {
    name: "Macadamia Pink Fud",
    slug: "macadamia-pink-fud",
  },
  {
    name: "Macadamia Golden Mix",
    slug: "macadamia-golden-mix",
  },
  {
    name: "Macadamia Matchacha",
    slug: "macadamia-matchacha",
  },
];

export default async function Layout({
  children,
  ...rest
}: {
  children: React.ReactNode;
}) {
  const recipes = await sanityClient.fetch<Recipe[]>(
    `*[_type == "recipe"] {
      ..., 
      ingredients[]{
        ingredient->{_id, name},
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
      next: { revalidate: 120 },
    }
  );
  return (
    <MainLayout>
      <div className="bg-b-orange pt-32 md:pt-40 pb-14 text-b-red-dark">
        <div className="container px-5">
          <h1 className="text-5xl font-semibold font-serif pb-5">
            Recetas Nutti
          </h1>
          <div className="flex gap-5 font-semibold mb-4">
            Que cremas Nutti tienes?
          </div>
          <div>
            <ul className="flex gap-2 flex-wrap">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link
                    className="relative z-10 rounded-full bg-b-yellow px-3 py-1 text-black font-semibold hover:bg-b-yellow-light whitespace-nowrap"
                    href="/recetas?ingredientes=maní"
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
      {children}
    </MainLayout>
  );
}

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
