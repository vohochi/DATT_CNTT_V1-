const products = [
  {
    product: 'Haven - Free Real Estate PSD Template',
    date: 'Aug 22, 2018',
    expire: 'Yes',
    download: 'Download File',
  },
  {
    product: 'HasTech - Profolio Business Template',
    date: 'Sep 12, 2018',
    expire: 'Never',
    download: 'Download File',
  },
];
const Download = () => {
  return (
    <div className="">
      <h3 className="text-2xl mb-2" style={{ borderBottom: '1px dashed #ccc' }}>
        Orders
      </h3>
      <table className="w-full border-collapse mt-6 text-center">
        <thead>
          <tr>
            <th className="px-4 py-2 font-bold border border-gray-300">
              Product
            </th>
            <th className="px-4 py-2 font-bold border border-gray-300">Date</th>
            <th className="px-4 py-2 font-bold border border-gray-300">
              Expire
            </th>
            <th className="px-4 py-2 font-bold border border-gray-300">
              Download
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.product} className="hover:bg-gray-100">
              <td className="px-4 py-2 border border-gray-300 text-gray-600">
                {product.product}
              </td>
              <td className="px-4 py-2 border border-gray-300 text-gray-600">
                {product.date}
              </td>
              <td className="px-4 py-2 border border-gray-300 text-gray-600">
                {product.expire}
              </td>

              <td className="px-4 py-2 border border-gray-300 text-gray-600">
                <a href="#" className="flex items-center">
                  <span
                    className="iconify"
                    data-icon="uiw:cloud-download"
                    data-width="16"
                  ></span>
                  <span className="ml-2">{product.download}</span>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Download;
