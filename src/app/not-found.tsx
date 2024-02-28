import MainLayout from "@/components/molecules/MainLayout";
import Link from "next/link";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nutti.co"),
  title: "Nutti - Cremas de nueces",
  description:
    "Cremas de nueces 100% naturales libres de sal, azúcar, endulzantes artificiales, conservantes, aceites añadidos y aditivos.",
};

export default async function Home() {
  return (
    <MainLayout>
      <div className="container h-[800px] flex items-center justify-center flex-col gap-10">
        <h1 className="text-3xl font-semibold">
          La página que buscas no existe
        </h1>

        <Link href="/">
          <span className="bg-white font-semibold px-5 py-4 inline-block rounded-full hover:bg-b-pink hover:text-white">
            Ver nuestros productos
          </span>
        </Link>
      </div>
    </MainLayout>
  );
}
