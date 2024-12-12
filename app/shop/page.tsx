import ShopBanner from "@/app/components/ShopBanner";
import Sidebar from "@/app/components/SideBar";
import ProductList from "@/app/components/ProductList";
import RelateProduct from "@/app/components/RelateProduct";

export default function ShopPage() {
  return (
    <>
      <ShopBanner />
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <Sidebar />
        </div>
        <div className="w-full md:w-3/4 md:pl-8">
          <ProductList />
          <RelateProduct />
        </div>
      </div>
    </>
  );
}
