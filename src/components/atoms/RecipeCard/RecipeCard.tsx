"use client";
import { Recipe, sanityClient } from "@/utils/sanity";
import { useNextSanityImage } from "next-sanity-image";
import { PortableText } from "@portabletext/react";

import Image from "next/image";
interface IRecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: IRecipeCardProps) => {
  const imageProps = useNextSanityImage(sanityClient, recipe.image) as any;
  return (
    <article
      key={recipe._id}
      className="flex flex-col items-start justify-between relative"
    >
      <div className="relative w-full">
        <Image
          {...imageProps}
          style={{ width: "100%", height: "auto" }} // layout="responsive" prior to Next 13.0.0
          sizes="(max-width: 800px) 100vw, 800px"
          placeholder="blur"
          blurDataURL={recipe.image.asset.metadata.lqip}
          className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
          alt=""
        />
      </div>
      <div className="max-w-xl">
        <div className="mt-3 flex items-center gap-x-4 text-xs">
          {recipe.ingredients
            .filter((i) => i.name.toLowerCase().includes("nutti"))
            .map((ingredient) => (
              <a
                key={ingredient.name}
                href={"recipe.category.href"}
                className="relative z-10 rounded-full bg-b-yellow px-3 py-1.5 text-black font-semibold hover:bg-b-yellow-light"
              >
                {ingredient.name.replace("Crema de ", "")}
              </a>
            ))}
        </div>
        <div className="">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href={"recipe.href"} className=" after:content-[' '] after:absolute after:inset-0 ">
              {recipe.title}
            </a>
          </h3>
          {/* <PortableText value={recipe.description} /> */}
        </div>
      </div>
    </article>
  );
};
export default RecipeCard;
