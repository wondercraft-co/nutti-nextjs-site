import MainLayout from "@/components/molecules/MainLayout";
import StoreLocatorContainer from "@/components/molecules/StoreLocatorContainer";
export default async function Stockists() {
  return (
    <MainLayout>
      <div className="container pt-32">
        <StoreLocatorContainer />
      </div>
    </MainLayout>
  );
}
