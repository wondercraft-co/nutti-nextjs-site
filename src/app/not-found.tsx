import InstagramFeed from "@/components/atoms/InstagramFeed";
import MainLayout from "@/components/molecules/MainLayout";
import ProductsGrid from "@/components/molecules/ProductsGrid";
import Image from "next/image";
import Link from "next/link";

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
