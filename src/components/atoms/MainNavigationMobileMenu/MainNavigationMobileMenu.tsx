"use client";
import { navigationItems } from "@/utils/constants";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  HamburgerMenuIcon
} from "@radix-ui/react-icons";
import Link from "next/link";

const MainNavigationMobileMenu = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button aria-label="Customise options" className="md:hidden">
          <HamburgerMenuIcon className="w-6 h-6" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[200px] mr-4 bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          {navigationItems.map((item) => (
            <DropdownMenu.Item key={item.href}>
              <Link
                href={item.href}
                target={item.target}
                className="text-sm leading-6 block text-gray-600 hover:text-gray-900 font-bold p-2 w-full text-center"
              >
                {item.name}
              </Link>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default MainNavigationMobileMenu;
