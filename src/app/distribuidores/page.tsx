import MainLayout from "@/components/molecules/MainLayout";
import StoreLocatorContainer from "@/components/molecules/StoreLocatorContainer";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Distribuidores - Nutti - Cremas de nueces",
  description: "Listado de todos nuestros distribuidores",
};

export default async function Stockists() {
  return (
    <MainLayout>
      <div className="container pt-32">
        <h1 className="text-3xl font-semibold mb-12 text-center">Nuestros Distribuidores</h1>
        <StoreLocatorContainer />
      </div>
    </MainLayout>
  );
}