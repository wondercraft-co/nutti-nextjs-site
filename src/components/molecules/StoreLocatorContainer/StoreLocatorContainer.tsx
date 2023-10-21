import StoreList from "@/components/atoms/StoreList";
import { sanityClient } from "@/utils/sanity";
import { useCallback } from "react";
interface IStoreLocatorContainerProps {}

export interface Store {
  _id: string;
  address: string;
  _createdAt: string;
  url: string;
  phone: string;
  country_iso: string;
  slug: {
    _type: string;
    current: string;
  };
  country: string;
  location: {
    lat: number;
    lng: number;
    _type: string;
  };
  _type: string;
  title: string;
  _updatedAt: string;
  city: string;
  _rev: string;
}

const StoreLocatorContainer = async ({}: IStoreLocatorContainerProps) => {
  const stores = await sanityClient.fetch<Store[]>(
    `*[_type == "store"] | order(city asc) [0...500]`,
    {
      next: { revalidate: 120 },
    }
  );
  return (
    <div>
      <StoreList stores={stores} />
    </div>
  );
};
export default StoreLocatorContainer;

// [_type == 'route' && count(*[city == ^.city]) == 1]{...}
// *[_type == "store"  && city match "Medellin"]
//*[_type == 'store' && count(*[city == ^.city]) == 1]{_id,slug,city, title}
//*[_type == "store"] | order(city asc)
//*[_type == "store"] | order(city asc) [0...500]
//https://www.sanity.io/docs/query-cheat-sheet#b5aec96cf56c
