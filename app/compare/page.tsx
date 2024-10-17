import { Image } from "@nextui-org/react";
import Link from 'next/link';

const Compare = () => {
    const arrTest = [
        { img: 'https://via.placeholder.com/370x450', name: 'Condimentum posuere consectetur urna', price: '115.00', stockStatus: 'In Stock', sku: 'REF. LA-791', description: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra,…', weight: 'N/A', dimensions: 'N/A' },
        { img: 'https://via.placeholder.com/370x450', name: 'Kaoreet lobortis sagittis laoreet', price: '95.00', stockStatus: 'In Stock', sku: 'REF. LA-779', description: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra,…', weight: 'N/A', dimensions: 'N/A' },
        { img: 'https://via.placeholder.com/370x450', name: 'Nostrum exercitationem itae ipsum', price: '79.00', stockStatus: 'In Stock', sku: 'REF. LA-788', description: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra,…', weight: 'N/A', dimensions: 'N/A' },
    ];

    const productAttributes = [
        {
            label: 'Product Info', render: (product) => (
                <div className="flex flex-col items-center space-y-4">
                    <div className="font-md">
                        <Link href="#">X Remove</Link>
                    </div>
                    <div className="w-20 h-24">
                        <Link href="/single-product">
                            <Image
                                src={product.img}
                                width={68}
                                height={84}
                                alt={product.name}
                                className="object-cover"
                            />
                        </Link>
                    </div>
                    <div className="text-center">
                        <h4 className="font-medium text-gray-800">
                            <Link href="/single-product">{product.name}</Link>
                        </h4>
                    </div>
                    <Link href="/product-cart">
                        <div className="px-4 py-2 bg-[#343538] text-white text-sm rounded-[50px]">
                            Add to cart
                        </div>
                    </Link>
                </div>
            )
        },
        { label: 'Price', render: (product) => `£${product.price}` },
        { label: 'Sku', render: (product) => product.sku },
        { label: 'Description', render: (product) => product.description },
        {
            label: 'Availability', render: (product) => (
                <span className="text-white bg-[#35d56a] text-[12px] py-[4px] px-[15px] rounded-[15px]">{product.stockStatus}</span>
            )
        },
        { label: 'Weight', render: (product) => product.weight },
        { label: 'Dimensions', render: (product) => product.dimensions },
    ];
    return (
        <main className="main-content">
            {/*== Start Page Header Area Wrapper ==*/}
            <nav aria-label="breadcrumb" className="bg-[#fffaef] py-10">
                <div className="container mx-auto">
                    <ol className="breadcrumb flex justify-center">
                        <li className="breadcrumb-item">
                            <Link href="/index">Home</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page"> &nbsp;/ Compare</li>
                    </ol>
                </div>
            </nav>

            {/*== Start Compare Area Wrapper ==*/}
            <section className="section-space py-8">
                <div className="container mx-auto w-[77%] my-[100px]">
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full text-left border-collapse">
                            <tbody className="border-t border-gray-300">
                                {productAttributes.map((attr, attrIndex) => (
                                    <tr key={attrIndex} className="border-b ">
                                        <th className="px-4 py-4 text-sm font-bold border bg-[#00000010] w-[200px]">{attr.label}</th>
                                        {arrTest.map((product, index) => (
                                            <td key={index} className="px-4 py-4 text-center border">{attr.render(product)}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            {/*== End Compare Area Wrapper ==*/}
        </main>
    );
};

export default Compare;
