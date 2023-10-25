import InstagramFeed from "@/components/atoms/InstagramFeed";
import MainLayout from "@/components/molecules/MainLayout";
import ProductsGrid from "@/components/molecules/ProductsGrid";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <MainLayout>
      <div
        className="bg-no-repeat bg-contain"
        style={{ backgroundImage: `url('/bg-decor.svg')` }}
      >
        <ProductsGrid />

        <div className="bg-[#EB99A6] py-20 md:py-44 my-44 overflow-hidden md:overflow-visible">
          <div className="container max-w-6xl gap-10 md:gap-20 grid sm:grid-cols-2 text-b-red-dark px-5">
            <div className="space-y-4">
              <h2 className="text-5xl font-semibold ">Distribuidores</h2>
              <p className="text-lg">
                Encuentra tus cremas Nutti en los mercados saludables del país.
                Conoce el más cercano aquí 🛒🍃🛍️
              </p>
              <Link
                href="/distribuidores"
                className="bg-white font-semibold px-5 py-4 inline-block rounded-full hover:bg-b-pink hover:text-white"
              >
                Ver Distribuidores
              </Link>
            </div>
            <div className="relative">
              <Image
                className="md:-my-56 rounded-2xl z-10 relative shadow-2xl"
                src="/Post-2.jpg"
                width="1000"
                height={1000}
                alt=""
              />
              <Image
                className="absolute -bottom-20 -right-20 rounded-2xl"
                src="/decor-distr.svg"
                width={300}
                height={500}
                alt=""
              />
            </div>
          </div>
        </div>
        <InstagramFeed />
      </div>
    </MainLayout>
  );
}
