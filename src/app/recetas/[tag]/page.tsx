import MainLayout from "@/components/molecules/MainLayout";
import RecipeListContainer from "@/components/molecules/RecipeListContainer";

export default async function Recipes({
  params,
}: {
  params: {
    tag: string;
  };
}) {
  const { tag } = params;
  return (
    <MainLayout>
      <RecipeListContainer tag={tag} />
    </MainLayout>
  );
}
