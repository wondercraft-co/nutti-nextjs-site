import MainLayout from "@/components/molecules/MainLayout";
import RecipeListContainer from "@/components/molecules/RecipeListContainer";
import { Recipe, sanityClient } from "@/utils/sanity";

export default async function Recipes() {
  return (
    <MainLayout>
      <RecipeListContainer />
    </MainLayout>
  );
}
