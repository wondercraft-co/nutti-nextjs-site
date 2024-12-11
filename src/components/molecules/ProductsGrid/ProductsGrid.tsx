"use client";
import FadeInMotion from "@/components/atoms/FadeInMotion";
import ProductTile from "@/components/atoms/ProductTile";
import Image from "next/image";
import { cn } from "@/utils";

type TProductTile = {
  type: "product" | "comment";
  name: string;
  image?: string;
  className?: string;
  label?: string;
  description?: string;
  img?: string;
};

const fromColors = [
  "from-b-pink",
  "from-b-blue",
  "from-b-yellow",
  "from-b-purple",
  "from-b-teal",
  "from-b-green",
];
const toColors = [
  "to-b-pink-light",
  "to-b-blue-light",
  "to-b-yellow-light",
  "to-b-purple-light",
  "to-b-teal-light",
  "to-b-green-light",
];

const randomGradientFromTo = () => {
  const from = fromColors[Math.floor(Math.random() * fromColors.length)];
  const to = toColors[Math.floor(Math.random() * toColors.length)];
  return `${from} ${to}`;
};

const flexPistacho: TProductTile = {
  type: "product",
  name: "Flexible Pistacho",
  image: "/products/sachet-pistacho.png",
  className: "from-b-purple to-b-yellow-light",
  // className: randomGradientFromTo(),
  label: "/labels/Etiquetas-para-web-14.jpg",
};
const flexAlmendra: TProductTile = {
  type: "product",
  name: "Flexible Almendra",
  image: "/products/sachet-almendra.png",
  className: "from-b-pink to-b-green-light",
  // className: randomGradientFromTo(),
  label: "/labels/Etiquetas-para-web-13.jpg",
};
const flexMacadamia: TProductTile = {
  type: "product",
  name: "Flexible Macadamia",
  image: "/products/sachet-macadamia.png",
  className: "from-b-blue to-b-pink-light",
  // className: randomGradientFromTo(),
  label: "/labels/Etiquetas-para-web-10.jpg",
};
const flexCocoa: TProductTile = {
  type: "product",
  name: "Flexible Cocoa",
  image: "/products/sachet-cocoa.png",
  className: "from-b-green to-b-teal-light",
  // className: randomGradientFromTo(),
  label: "/labels/Etiquetas-para-web-8.jpg",
};
const flexCanela: TProductTile = {
  type: "product",
  name: "Flexible Canela",
  image: "/products/sachet-canela.png",
  className: "from-b-yellow to-b-teal-light",
  // className: randomGradientFromTo(),
  label: "/labels/Etiquetas-para-web-9.jpg",
};
const flexMani: TProductTile = {
  type: "product",
  name: "Flexible Maní",
  image: "/products/sachet-mani.png",
  className: "from-b-yellow to-b-yellow-light",
  // className: randomGradientFromTo(),
  label: "/labels/Etiquetas-para-web-12.jpg",
};
const flexPink: TProductTile = {
  type: "product",
  name: "Flexible Pink Fud",
  image: "/products/sachet-pink.png",
  className: "from-b-teal to-b-teal-light",
  // className: randomGradientFromTo(),
  label: "/labels/Etiquetas-para-web-2.jpg",
};
const flexMaranon: TProductTile = {
  type: "product",
  name: "Flexible Marañón",
  image: "/products/sachet-maranon.png",
  className: "from-b-blue to-b-yellow-light",
  // className: randomGradientFromTo(),
  label: "/labels/Etiquetas-para-web-11.jpg",
};
const vidrioAlmendras: TProductTile = {
  type: "product",
  name: "Almendra",
  image: "/products/vidrio-almendras.png",
  className: "from-b-purple to-b-yellow-light",
  // className: randomGradientFromTo(),
  label: "/labels/Etiquetas-para-web-7.jpg",
};
const vidrioCanela: TProductTile = {
  type: "product",
  name: "Marañón Canela & Especias",
  image: "/products/vidrio-canela.png",
  className: "from-b-yellow to-b-teal-light",
  // className: randomGradientFromTo(),
  label: "/labels/Etiquetas-para-web-9.jpg",
};
const vidrioCocoa: TProductTile = {
  type: "product",
  name: "Marañón Cocoa & Especias",
  image: "/products/vidrio-cocoa.png",
  className: "from-b-green to-b-teal-light",
  // className: randomGradientFromTo(),
  label: "/labels/Etiquetas-para-web-8.jpg",
};
const vidrioGolden: TProductTile = {
  type: "product",
  name: "Macadamia Golden Mix",
  image: "/products/vidrio-golden.png",
  className: "from-b-yellow to-b-teal-light",
  // className: randomGradientFromTo(),
  label: "/labels/Etiquetas-para-web-1.jpg",
};
const vidrioMacadamia: TProductTile = {
  type: "product",
  name: "Macadamia",
  image: "/products/vidrio-macadamia.png",
  className: "from-b-blue to-b-purple-light",
  // className: randomGradientFromTo(),
  label: "/labels/Etiquetas-para-web-4.jpg",
};
const vidrioMani: TProductTile = {
  type: "product",
  name: "Maní",
  image: "/products/vidrio-mani.png",
  className: "from-b-teal to-b-teal-light",
  // className: randomGradientFromTo(),
  label: "/labels/Etiquetas-para-web-6.jpg",
};
const vidrioMaranon: TProductTile = {
  type: "product",
  name: "Marañón",
  image: "/products/vidrio-maranon.png",
  className: "from-b-pink to-b-blue-light",
  // className: randomGradientFromTo(),
  label: "/labels/Etiquetas-para-web-5.jpg",
};
const vidrioMatcha: TProductTile = {
  type: "product",
  name: "Macadamia Matchacha",
  image: "/products/vidrio-matcha.png",
  className: "from-b-purple to-b-teal-light",
  // className: randomGradientFromTo(),
  label: "/labels/Etiquetas-para-web-3.jpg",
};

const comments: TProductTile[] = [
  {
    type: "comment",
    name: "drcarlosjaramillo",
    description: "Hermoso proyecto de coherencia y productos maravillosos",
    className: "bg-b-pink",
    img: "/profiles/drcarlosjaramillo.jpg",
  },
  {
    type: "comment",
    name: "ale.prietoo",
    description: "Amo la de almendras",
    className: "bg-b-pink",
    img: "/profiles/aleprietoo.jpg",
  },
  {
    type: "comment",
    name: "silviadelgadop_",
    description: "Estoy obsesionada con la crema de marañón 🤩🤩",
    className: "bg-b-pink",
    img: "/profiles/silviadelgadop_.jpg",
  },
  {
    type: "comment",
    name: "pilimart",
    description: "Después de esa crema de Marañon no hay más 🤤🤤🤤",
    className: "bg-b-pink",
    img: "/profiles/pilimart.jpg",
  },
  {
    type: "comment",
    name: "rossicocina",
    description: "😍😍😍 Lasquiero todas",
    className: "bg-b-pink",
    img: "/profiles/rossicocina.jpg",
  },
  {
    type: "comment",
    name: "brenda.mazutier22",
    description: "Maní 🥜 deliciosa, suave y lo mejor sin azúcar",
    className: "bg-b-pink",
    img: "/profiles/brendamazutier.jpg",
  },
  {
    type: "comment",
    name: "montessori.omw",
    description: "Macadamia 100%%%%%%%% 🤩🤩🤩🤩",
    className: "bg-b-pink",
    img: "/profiles/montessori.jpg",
  },
  {
    type: "comment",
    name: "tedeterricola",
    description: "Y de macadamia que es la más deliciosa del mundo! ❤️",
    className: "bg-b-pink",
    img: "/profiles/tedeterricola.jpg",
  },

  {
    type: "comment",
    name: "cristi.titi2312",
    description:
      "Es super hiper mega deliciosaaaaa la amo 🤤😍 destaparla y sentir esa aroma a canela y luego sentir su suave textura al probarla, es lo máximo super recomendada 👏👏👏... nota: todas.son deliciosas uuff pero esta es la mas 🔝💯",
    className: "bg-b-pink",
  },
  {
    type: "comment",
    name: "luisa_rueda05",
    description: "Llevo un mes probándola, excelente producto 🔥 🙌 🩷 💫",
    className: "bg-b-pink",
  },
  {
    type: "comment",
    name: "ceciliagomez24037",
    description:
      "Son las mejores que he probado tanto en textura como en sabor 🤤",
    className: "bg-b-pink",
  },
  {
    type: "comment",
    name: "natalia_sorzano",
    description: "Son las más ricas de todas!! Soy adicta a la de Marańón 🙈🙈",
    className: "bg-b-pink",
  },
  {
    type: "comment",
    name: "cami_marcas",
    description:
      "No necesito más!! Los amo @nutti.coparte de mis dias siempre 🙌🙌🙌🙌🙌🙌 🩷🩷🩷🩷🩷🩷🩷",
    className: "bg-b-pink",
  },
  {
    type: "comment",
    name: "cuidartebynatalia",
    description: "Nos hacen muy felices porque son DELICIOSAS 😍💘✨",
    className: "bg-b-pink",
  },
  {
    type: "comment",
    name: "laurapadillaconsultorjust",
    description: "Y las mas ricas de todo el mercado. 💜🥰",
    className: "bg-b-pink",
  },
  {
    type: "comment",
    name: "javierprieto.t",
    description:
      "Cuando me preguntan por buenas cremas de nueces siempre los recomiendo! Buenísimas!",
    className: "bg-b-pink",
  },
];

const col1 = [
  comments[0],
  flexAlmendra,
  flexMacadamia,
  comments[3],
  comments[4],
  flexMaranon,
  flexMani,
  vidrioGolden,
];
const col2 = [
  flexPistacho,
  comments[1],
  vidrioAlmendras,
  comments[2],
  vidrioCanela,
  vidrioCocoa,
  flexCocoa,
  comments[8],
];

const col3 = [
  comments[5],
  flexCanela,
  flexPink,
  vidrioMaranon,
  vidrioMatcha,
  vidrioMani,
  comments[6],
  comments[7],
  vidrioMacadamia,
];

const tilesMapper = (tile: TProductTile, index: number, column: number) => {
  if (tile.type === "product" && tile.image && tile.label) {
    return (
      <FadeInMotion delay={index * column * 0.1} key={index}>
        <ProductTile
          name={tile.name}
          image={tile.image}
          className={tile.className}
          modalImageUrl={tile.label}
        />
      </FadeInMotion>
    );
  } else {
    return (
      <FadeInMotion delay={index * column * 0.1} key={index}>
        <div className="bg-white p-4 rounded-2xl flex justify-start gap-3 shadow-xl">
          <div
            className={cn(
              "bg-gradient-to-t w-10 h-10 flex-shrink-0 rounded-full",
              tile.className
            )}
          >
            {tile.img && (
              <Image
                src={tile.img}
                className="rounded-full"
                alt={tile.name}
                width={40}
                height={40}
              />
            )}
          </div>
          <div className="text-sm">
            <strong>{tile.name}</strong>
            <br /> {tile.description}
          </div>
        </div>
      </FadeInMotion>
    );
  }
};

interface IProductsGridProps {}

const ProductsGrid = ({}: IProductsGridProps) => {
  return (
    <div className="container max-w-6xl pt-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
        <div className="space-y-5">
          <FadeInMotion>
            <div className="text-xl mb-24">
              <h1 className="inline">
                <strong>Cremas de nueces 100% naturales</strong>
              </h1>{" "}
              libres de sal, azúcar, endulzantes artificiales, conservantes,
              aceites añadidos y aditivos.
            </div>
          </FadeInMotion>
          {col1.map((tile, index) => tilesMapper(tile, index, 1))}
        </div>
        <div className="space-y-5">
          {col2.map((tile, index) => tilesMapper(tile, index, 2))}
        </div>
        <div className="space-y-5">
          {col3.map((tile, index) => tilesMapper(tile, index, 3))}
        </div>
      </div>
    </div>
  );
};
export default ProductsGrid;
