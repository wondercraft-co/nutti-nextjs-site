import Image from "next/image";
import Link from "next/link";
interface IMainNavigationProps {}

const MainNavigation = ({}: IMainNavigationProps) => {
  return (
    <header className="w-full fixed top-0">
      <div className="container py-2">
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
            <ul>
              <li>
                <Link href="/distribuidores" className="font-bold">
                  Distribuidores
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default MainNavigation;
