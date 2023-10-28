import MainLayout from "@/components/molecules/MainLayout";
import RecipeListContainer from "@/components/molecules/RecipeListContainer";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Recetas - Nutti - Cremas de nueces",
  description:
    "Recetas practicas y deliciosas con nuestras cremas de nueces 100% naturales libres de sal, azúcar, endulzantes artificiales, conservantes, aceites añadidos y aditivos.",
  openGraph: {
    images: "https://www.nutti.co/api/og?title=Recetas%20Saludables",
  },
};

export default async function Recipes() {
  return (
    <MainLayout>
      <RecipeListContainer />
    </MainLayout>
  );
}
