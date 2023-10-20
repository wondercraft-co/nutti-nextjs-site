import MainNavigation from "@/components/atoms/MainNavigation";

interface IMainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
};
export default MainLayout;
