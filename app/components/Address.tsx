const Address = () => {
  return (
    <div className="">
      <h3 className="text-2xl mb-2" style={{ borderBottom: '1px dashed #ccc' }}>
        Billing Address
      </h3>
      <address>
        <p className="mt-6 text-xl text-gray-600">
          <strong>Alex Tuntuni</strong>
        </p>
        <p className="text-gray-600">
          1355 Market St, Suite 900 <br />
          San Francisco, CA 94103
        </p>
        <p className="text-gray-600">Mobile: (123) 456-7890</p>
        <a
          href="#"
          className="text-gray-600 hover:text-red-500 transition duration-500 flex items-center"
        >
          <span
            className="iconify"
            data-icon="fa:pencil-square-o"
            data-width="16"
          ></span>
          <span className="ml-2 italic">Edit Address</span>
        </a>
      </address>
    </div>
  );
};
export default Address;
