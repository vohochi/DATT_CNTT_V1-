import ShopBanner from './ShopBanner';
import Sidebar from './SideBar';
import ProductList from './ProductList';
import RelateProduct from './RelateProduct';

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
