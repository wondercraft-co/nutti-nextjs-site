"use client";
import { Store } from "@/components/molecules/StoreLocatorContainer/StoreLocatorContainer";
import Link from "next/link";
import { Fragment, useCallback } from "react";

interface IStoreListProps {
  stores: Store[];
}

function groupBy<T>(arr: T[], fn: (item: T) => any) {
  return arr.reduce<Record<string, T[]>>((prev, curr) => {
    const groupKey = fn(curr);
    const group = prev[groupKey] || [];
    group.push(curr);
    return { ...prev, [groupKey]: group };
  }, {});
}

const StoreList = ({ stores }: IStoreListProps) => {
  const storeListRender = useCallback(() => {
    const groupedByCity = groupBy(stores, (store) => {
      return store.city;
    });
    return (
      <figure>
        {Object.entries(groupedByCity).map(([city, stores], index) => {
          return (
            <div key={city} className="px-5">
              <figcaption className="text-2xl font-bold mt-10 mb-4">
                {city}
              </figcaption>
              <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5">
                {stores.map((store) => (
                  <li key={store._id}>
                    <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 p-4">
                      <h3 className="font-semibold text-lg">{store.title}</h3>
                      <p>{store.address}</p>
                      <p>
                        <Link
                          className="text-b-green"
                          href={`tel:${store.phone}`}
                        >
                          {store.phone}
                        </Link>
                      </p>
                      {store.url ? (
                        <p>
                          <Link className="text-b-green" href={store.url}>
                            Sitio web
                          </Link>
                        </p>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </figure>
    );
  }, [stores]);
  return <div>{storeListRender()}</div>;
};
export default StoreList;
