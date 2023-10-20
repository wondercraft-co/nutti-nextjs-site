import Image from "next/image";
import MainLayout from "@/components/molecules/MainLayout";
import { cn } from "@/utils";

const sachetAlmendra = "/products/sachet-almendra.png";
const sachetMacadamia = "/products/sachet-macadamia.png";
const sachetMani = "/products/sachet-mani.png";
const sachetMaranon = "/products/sachet-maranon.png";
const vidrioAlmendras = "/products/vidrio-almendras.png";
const vidrioCanela = "/products/vidrio-canela.png";
const vidrioCocoa = "/products/vidrio-cocoa.png";
const vidrioGolden = "/products/vidrio-golden.png";
const vedrioMacadamia = "/products/vidrio-macadamia.png";
const vidrioMani = "/products/vidrio-mani.png";
const vidrioMaranon = "/products/vidrio-maranon.png";
const vidrioMatcha = "/products/vidrio-matcha.png";
const vidrioPink = "/products/vidrio-pink.png";

const products = [
  {
    name: "Flexible Almendras",
    image: sachetAlmendra,
    className: "from-b-pink to-b-pink-light",
    label: "/labels/Etiquetas-para-web-13.jpg",
  },
];

export default function Home() {
  return (
    <MainLayout>
      <div className="container max-w-6xl mt-20">
        <div className="grid grid-cols-3 gap-5 ">
          <div>
            Cremas de nueces 100% naturales libres de sal, azúcar, endulzantes
            artificiales, conservantes, aceites añadidos y aditivos.
          </div>
          {products.map((product, index) => (
            <div
              key={index}
              className={cn(
                "bg-gradient-to-t rounded-3xl aspect-square relative flex items-center justify-center",
                product.className
              )}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="-mt-4"
              />
              <div className="absolute bottom-3 text-white text-center">
                <div className=" uppercase font-bold text-lg">{product.name}</div>
                <button className="bg-white rounded-full text-black px-3 pt-1 font-semibold">Información nutricional</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
