import { cn } from "@/utils";
import Image from "next/image";
import LabelsModal from "../LabelsModal";
import ProductTileDecor from "../ProductTileDecor";

interface IProductTileProps {
  name: string;
  image: string;
  modalImageUrl: string;
  className?: string;
}

const ProductTile = ({
  name,
  image,
  modalImageUrl,
  className,
}: IProductTileProps) => {
  return (
    <div
      className={cn(
        "bg-gradient-to-t rounded-3xl aspect-square relative flex items-center justify-center shadow-xl",
        className
      )}
    >
      <ProductTileDecor />
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        className="-mt-14 relative z-10"
      />
      <div className="absolute bottom-3 text-white text-center">
        <div className=" uppercase font-bold text-lg">{name}</div>
        <LabelsModal imageUrl={modalImageUrl} />
      </div>
    </div>
  );
};
export default ProductTile;
