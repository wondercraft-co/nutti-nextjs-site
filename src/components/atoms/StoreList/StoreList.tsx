"use client";
import { Store } from "@/components/molecules/StoreLocatorContainer/StoreLocatorContainer";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useCallback } from "react";

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
      if (store.city === "Bogota") {
        return "bogotá";
      }
      return store.city.toLowerCase();
    });
    return (
      <Accordion.Root
        className="bg-mauve6 rounded-md shadow-black/5"
        type="single"
        // defaultValue=}
        collapsible
      >
        {Object.entries(groupedByCity).map(([city, stores], index) => {
          return (
            <Accordion.AccordionItem
              className="border-b border-b-yellow/50"
              value={city}
              key={city}
            >
              <Accordion.AccordionTrigger className="text-2xl font-bold p-3 capitalize flex items-center justify-between w-full">
                {city}
                <ChevronDownIcon
                  className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
                  aria-hidden
                />
              </Accordion.AccordionTrigger>
              <Accordion.AccordionContent className=" data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
                <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5 pb-5 px-3">
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
              </Accordion.AccordionContent>
            </Accordion.AccordionItem>
          );
        })}
      </Accordion.Root>
    );
  }, [stores]);
  return <div>{storeListRender()}</div>;
};
export default StoreList;
