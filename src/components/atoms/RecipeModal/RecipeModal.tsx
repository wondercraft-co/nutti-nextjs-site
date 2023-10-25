"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

interface IRecipeModalProps {
  children: React.ReactNode;
}

const RecipeModal = ({ children }: IRecipeModalProps) => {
  const router = useRouter();
  return (
    <Dialog.Root
      defaultOpen
      onOpenChange={(open) => {
        if (!open) router.back();
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black bg-opacity-30  data-[state=open]:animate-overlayShow fixed inset-0 z-20" />
        <Dialog.Content className=" data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[98vh] w-[98vw] max-w-[1200px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-30">
          <div className="overflow-auto w-full h-full max-h-[98vh]">{children}</div>
          <Dialog.Close asChild>
            <button
              className="text-white bg-b-pink hover:bg-b-pink focus:shadow-b-pink absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
export default RecipeModal;
