const products = [
  {
    product: "Haven - Free Real Estate PSD Template",
    date: "Aug 22, 2018",
    expire: "Yes",
    download: "Download File",
  },
  {
    product: "HasTech - Profolio Business Template",
    date: "Sep 12, 2018",
    expire: "Never",
    download: "Download File",
  },
];
const Download = () => {
  return (
    <div className="">
      <h3 className="text-2xl mb-2" style={{ borderBottom: "1px dashed #ccc" }}>
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
<<<<<<< HEAD
                  <span
                    className="iconify"
                    data-icon="uiw:cloud-download"
                    data-width="16"
                  ></span>
=======
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M11.5 2.5a4.5 4.5 0 0 1 4.492 4.77H16l-.001 1.227a4 4 0 0 1 3.996 3.799l.005.2a4 4 0 0 1-3.8 3.992l-.2.005h-.001L16 16.5H4a4.01 4.01 0 0 1-4-4.005a4 4 0 0 1 3.198-3.918a3 3 0 0 1 4.313-3.664A4.5 4.5 0 0 1 11.5 2.5m-.046 4h-2v4.922L7 11.42l3.454 4.076l3.464-4.073h-2.464z"
                    />
                  </svg>
>>>>>>> Tinhf
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
