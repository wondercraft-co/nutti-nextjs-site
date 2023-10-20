import Image from "next/image";
import Link from "next/link";
interface IMainNavigationProps {}

const MainNavigation = ({}: IMainNavigationProps) => {
  return (
    <header className="container py-2">
      <div className="flex justify-between">
        <Link href="/">
          <Image
            src="/nutti-logo.svg"
            width={100}
            height={34}
            alt="Nutti Logo"
          />
        </Link>

        <nav className="flex items-center">
          <ul>
            <li>
              <Link href="/" className="font-bold">
                Products
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default MainNavigation;
