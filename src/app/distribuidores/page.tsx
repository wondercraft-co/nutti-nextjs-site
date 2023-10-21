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
        <StoreLocatorContainer />
      </div>
    </MainLayout>
  );
}
