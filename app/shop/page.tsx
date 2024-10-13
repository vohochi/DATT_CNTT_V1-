import ShopBanner from "./ShopBanner";
import Sidebar from "./SideBar";
import ProductList from "./ProductList";

export default function ShopPage() {
  return (
    <>
      <ShopBanner />
      <div className="container mx-auto px-4 py-8 flex">
        <Sidebar />
        <div className="flex-1 ml-8">
          <ProductList />
        </div>
      </div>
    </>
  );
}
