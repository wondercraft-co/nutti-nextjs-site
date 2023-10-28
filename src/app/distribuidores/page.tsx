import StoreList from "@/components/atoms/StoreList";
import MainLayout from "@/components/molecules/MainLayout";
import { Store, sanityClient } from "@/utils/sanity";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Distribuidores - Nutti - Cremas de nueces",
  description: "Listado de todos nuestros distribuidores",
  openGraph: {
    images: "https://www.nutti.co/api/og?title=Distribuidores",
  },
};

export default async function Stockists() {
  const stores = await sanityClient.fetch<Store[]>(
    `*[_type == "store"] | order(city asc) [0...500]`,
    {
      next: { revalidate: 120 },
    }
  );
  return (
    <MainLayout>
      <div className="container pt-32">
        <h1 className="text-3xl font-semibold mb-12 text-center">
          Nuestros Distribuidores
        </h1>
        <StoreList stores={stores} />
      </div>
    </MainLayout>
  );
}

// [_type == 'route' && count(*[city == ^.city]) == 1]{...}
// *[_type == "store"  && city match "Medellin"]
//*[_type == 'store' && count(*[city == ^.city]) == 1]{_id,slug,city, title}
//*[_type == "store"] | order(city asc)
//*[_type == "store"] | order(city asc) [0...500]
//https://www.sanity.io/docs/query-cheat-sheet#b5aec96cf56c
