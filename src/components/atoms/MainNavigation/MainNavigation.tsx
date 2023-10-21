import { navigationItems } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
interface IMainNavigationProps {}

const MainNavigation = ({}: IMainNavigationProps) => {
  return (
    <header className="w-full absolute top-0">
      <div className="container py-5">
        <div className="flex justify-between">
          <Link href="/">
            <Image
              src="/nutti-logo.svg"
              width={100}
              height={36}
              alt="Nutti Logo"
            />
          </Link>

          <nav className="flex items-center">
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
