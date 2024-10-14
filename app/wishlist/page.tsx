import { Image } from "@nextui-org/react";

const Wishlist = () => {
    const arrTest = [
        { img: 'https://via.placeholder.com/370x450', name: 'Condimentum posuere consectetur urna', price: '115.00', stockStatus: 'In Stock' },
        { img: 'https://via.placeholder.com/370x450', name: 'Kaoreet lobortis sagittis laoreet', price: '95.00', stockStatus: 'In Stock' },
        { img: 'https://via.placeholder.com/370x450', name: 'Nostrum exercitationem itae ipsum', price: '79.00', stockStatus: 'In Stock' },
    ];

    return (
        <main className="main-content ">
            {/* Breadcrumb Area */}
            <nav aria-label="breadcrumb" className="bg-[#fffaef] py-10">
                <div className="container mx-auto">
                    <ol className="breadcrumb flex justify-center">
                        <li className="breadcrumb-item">
                            <a href="/index">Home </a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page"> &nbsp;/ Wishlist</li>
                    </ol>
                </div>
            </nav>

            {/* Wishlist Area */}
            <section className="section-space py-8">
                <div className="container mx-auto w-[77%] my-[100px]">
                    <div className="overflow-x-auto ">
                        <form action="#" method="post">
                            <table className="table-auto w-full text-center border-collapse">
                                <thead className="border">
                                    <tr className="uppercase text-[14px]">
                                        <th className="p-4 border-b border-r"> &nbsp; </th>
                                        <th className="p-4 border-b border-r"> &nbsp; </th>
                                        <th className="p-4 border-b border-r">Product name</th>
                                        <th className="p-4 border-b border-r">Unit price</th>
                                        <th className="p-4 border-b border-r">Stock status</th>
                                        <th className="p-4 border-b"> &nbsp; </th>
                                    </tr>
                                </thead>
                                <tbody className="border">
                                    {arrTest.map((item, index) => (
                                        <tr key={index} className="border-b hover:bg-[#00000006] transition-all duration-200 ease-in-out">
                                            <td className="product-remove border-r p-4">
                                                x
                                            </td>
                                            <td className="product-thumbnail border-r flex justify-center items-center p-4">
                                                <div className="thumb">
                                                    <a href="/single-product">
                                                        <Image
                                                            src={item.img}
                                                            width={68}
                                                            height={84}
                                                            alt={`Product ${item.name}`}
                                                            className="object-cover"
                                                        />
                                                    </a>
                                                </div>
                                            </td>
                                            <td className="product-name border-r p-4">
                                                <a className="title" href="/single-product">{item.name}</a>
                                            </td>
                                            <td className="product-price border-r p-4">
                                                <span className="price">${item.price}</span>
                                            </td>
                                            <td className="product-stock-status border-r p-4">
                                                <span className="wishlist-in-stock text-[#ff6565]">{item.stockStatus}</span>
                                            </td>
                                            <td className="product-add-to-cart p-4">
                                                <a
                                                    className="btn-shop-cart border border-gray-300 p-5 rounded transition-colors duration-300 ease-in-out hover:bg-red-500 hover:text-white hover:border-red-500"
                                                    href="/cart"
                                                >
                                                    Add to Cart
                                                </a>
                                            </td>
                                        </tr>

                                    ))}
                                </tbody>
                            </table>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Wishlist;
