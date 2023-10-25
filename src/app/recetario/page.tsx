import MainLayout from "@/components/molecules/MainLayout";
import RecipesList from "@/components/molecules/RecipesList";
import { Recipe, sanityClient } from "@/utils/sanity";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Recetario - Nutti - Cremas de nueces",
  description: "Listado de todos nuestros distribuidores",
};

export default async function Recipes() {
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
      <div className="container pt-32">
        <RecipesList recipes={recipes} />
      </div>
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
