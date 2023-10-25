import StoreList from "@/components/atoms/StoreList";
import { Store, sanityClient } from "@/utils/sanity";
interface IStoreLocatorContainerProps {}


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
