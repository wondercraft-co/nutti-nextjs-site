"use client";
import { Recipe, sanityClient } from "@/utils/sanity";
import { useNextSanityImage } from "next-sanity-image";
import { PortableText } from "@portabletext/react";

import Image from "next/image";
import Link from "next/link";
interface IRecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: IRecipeCardProps) => {
  const imageProps = useNextSanityImage(sanityClient, recipe.image) as any;
  return (
    <article
      key={recipe._id}
      className="relative flex flex-col items-start justify-between"
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
        <div className="absolute w-full h-full top-0 z-[1] bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl pointer-events-none" />

        <div className="mt-3 flex items-center gap-x-4 text-xs flex-wrap absolute bottom-2 left-2 gap-1">
          {recipe.ingredients
            ?.filter((i) => i.name)
            ?.filter((i) => i.name.toLowerCase().includes("nutti"))
            ?.map((ingredient) => (
              // <Link
              //   key={ingredient.name}
              //   href={"recipe.category.href"}
              //   className="bg-b-teal-light hover:bg-b-yellow-light relative z-10 rounded-full px-3 py-1 font-semibold text-black whitespace-nowrap"
              // >
              //   {ingredient.name.replace("Crema de ", "").replace(/Nutti$/, "")}
              // </Link>
              <span
                key={ingredient.name}
                className="bg-b-teal-light relative z-10 rounded-full px-3 py-1 font-semibold text-black whitespace-nowrap pointer-events-none"
              >
                {ingredient.name.replace("Crema de ", "").replace(/Nutti$/, "")}
              </span>
            ))}
        </div>
      </div>
      <div className="max-w-xl">
        <div className="">
          <h3 className="mt-3 text-2xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <Link
              href={`/recetas/detalle/${recipe.slug.current}`}
              className=" after:content-[' '] after:absolute after:inset-0"
            >
              {recipe.title}
            </Link>
          </h3>
        </div>
      </div>
    </article>
  );
};
export default RecipeCard;
