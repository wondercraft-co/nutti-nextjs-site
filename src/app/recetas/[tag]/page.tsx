import MainLayout from "@/components/molecules/MainLayout";
import RecipeListContainer from "@/components/molecules/RecipeListContainer";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Recetas - Nutti - Cremas de nueces",
  description:
    "Recetas practicas y deliciosas con nuestras cremas de nueces 100% naturales libres de sal, azúcar, endulzantes artificiales, conservantes, aceites añadidos y aditivos.",
};

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
