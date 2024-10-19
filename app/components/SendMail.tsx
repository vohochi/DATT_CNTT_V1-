const SendMail = () => {
  return (
    <div className="w-full container mx-auto">
      <div className="flex flex-col items-center">
        <div
          className=" bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('10017.jpg')", borderRadius: '20px' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center bg-opacity-80 py-10 px-20">
            <div className="md:w-5/12 w-full text-left mb-6 md:mb-0">
              <h1 className="text-gray-800 text-3xl md:text-6xl font-bold mb-4">
                Join with us
              </h1>
              <p className="text-gray-700 text-base md:text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
                sequi fugiat consectetur? Explicabo v.
              </p>
            </div>

            <div className="md:w-7/12 w-full flex justify-center items-center">
              <input
                type="email"
                className="p-2 w-full md:w-3/4 border border-red-500 rounded-l focus:outline-none"
                placeholder="enter your email"
              />
              <button className="p-2 w-1/3 md:w-auto text-white bg-[#ce4820] rounded-r hover:bg-[#ce4820]-700">
                send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMail;
