import ShopBanner from './ShopBanner';
import Sidebar from './SideBar';
import ProductList from './ProductList';
import RelateProduct from './RelateProduct';

export default function ShopPage() {
  return (
    <>
      <ShopBanner />
      {/* <ShopTopBar/> */}
      <div className="container mx-auto px-4 py-8 flex w-[77%]">
        <Sidebar />
        <div className="flex-1 ml-8">
          <ProductList />
          <RelateProduct />
        </div>
      </div>
    </>
  );
}
