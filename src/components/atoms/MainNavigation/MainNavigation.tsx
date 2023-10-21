"use client";
import { navigationItems } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import MainNavigationMobileMenu from "../MainNavigationMobileMenu";
import useScrollDirection from "@/utils/useScrollDirection";
import { useWindowScroll } from "@uidotdev/usehooks";
import { cn } from "@/utils";
interface IMainNavigationProps {}

const MainNavigation = ({}: IMainNavigationProps) => {
  const scrollDirection = useScrollDirection();
  const [{ y }] = useWindowScroll();
  return (
    <header
      className={cn(
        "w-full fixed top-0 transition-all duration-300 z-20 ",
        {
          "bg-b-back": y && y > 100,
        }
      )}
      style={{
        transform: `translateY(${scrollDirection === "up" ? 0 : "-100%"})`,
      }}
    >
      <div className="container py-5 px-5">
        <div className="flex justify-between">
          <Link href="/">
            <Image
              src="/nutti-logo.svg"
              width={100}
              height={36}
              alt="Nutti Logo"
            />
          </Link>

          <MainNavigationMobileMenu />

          <nav className="items-center hidden md:flex">
            <ul className="flex space-x-10">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-bold"
                    target={item.target}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default MainNavigation;
