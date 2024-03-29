import VideoPlayer from "@/components/atoms/VideoPlayer";
import MainLayout from "@/components/molecules/MainLayout";
import { Recipe, sanityClient } from "@/utils/sanity";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Metadata } from "next/types";
interface PageProps {
  params: {
    slug: string;
  };
}

const getRecipe = async (slug: string) => {
  const recipe = await sanityClient.fetch<Recipe>(
    `*[_type == "recipe" && slug.current == $slug][0] {
      ..., 
      ingredients[]{
        ingredient->{_id, name},
        "name": ingredient->name,
        number, unit
      },
      description[] {
        ...,
      },
      image {
        asset->{
            ...,
            metadata
          }
        }
      }`,
    {
      slug: slug,
    },
    {
      next: { revalidate: 120 },
    }
  );
  return recipe;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = params;
  const recipe = await getRecipe(slug);

  return {
    metadataBase: new URL("https://www.nutti.co"),
    title: recipe.title + " - Nutti - Cremas de nueces",
    description:
      "Recetas practicas y deliciosas con nuestras cremas de nueces 100% naturales libres de sal, azúcar, endulzantes artificiales, conservantes, aceites añadidos y aditivos.",
    openGraph: {
      images: encodeURI(
        "https://www.nutti.co/api/og?title=Recetas: " + recipe.title
      ),
    },
  };
}

export default async function RecipeDetail({ params }: PageProps) {
  const { slug } = params;
  const recipe = await getRecipe(slug);
  return (
    <MainLayout>
      <div className="container max-w-6xl pt-32 px-5">
        <Link href="/recetas" className="">
          <span className="bg-b-teal-light font-semibold px-5 py-4 rounded-full hover:bg-b-teal hover:text-white inline-flex items-center gap-3">
            <ArrowLeftIcon className="w-5 h-5" />
            Volver al recetario
          </span>
        </Link>
        <div className="grid grid-cols-1 mt-5 md:grid-cols-6">
          <div className="col-span-2">
            <VideoPlayer url={recipe.videoUrl} />
          </div>
          <div className="col-span-4 p-5 pr-10">
            <h1 className="text-3xl font-semibold">{recipe.title}</h1>
            <hr className="my-4" />
            <h2 className="text-xl font-semibold mb-2">Ingredientes</h2>
            <ul>
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient.name} className="list-disc ml-4">
                  {ingredient.name} {ingredient.number} {ingredient.unit}
                </li>
              ))}
            </ul>
            <hr className="my-4" />
            <PortableText value={recipe.description} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
