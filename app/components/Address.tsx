const Address = () => {
  return (
    <div className="">
      <h3 className="text-2xl mb-2" style={{ borderBottom: "1px dashed #ccc" }}>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.28em"
            height="1em"
            viewBox="0 0 1792 1408"
          >
            <path
              fill="currentColor"
              d="m888 1056l116-116l-152-152l-116 116v56h96v96zm440-720q-16-16-33 1L945 687q-17 17-1 33t33-1l350-350q17-17 1-33m80 594v190q0 119-84.5 203.5T1120 1408H288q-119 0-203.5-84.5T0 1120V288Q0 169 84.5 84.5T288 0h832q63 0 117 25q15 7 18 23q3 17-9 29l-49 49q-14 14-32 8q-23-6-45-6H288q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113V994q0-13 9-22l64-64q15-15 35-7t20 29m-96-738l288 288l-672 672H640V864zm444 132l-92 92l-288-288l92-92q28-28 68-28t68 28l152 152q28 28 28 68t-28 68"
            />
          </svg>
            <span className="ml-2 italic">Edit Address</span>
        </a>
      </address>
    </div>
  );
};
export default Address;
