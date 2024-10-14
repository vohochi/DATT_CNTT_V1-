"use client";
import { Image } from "@nextui-org/react"; // Keep this import if you're using Next UI components

const About = () => {
  const funFacts = [
    {
      id: 1,
      imgSrc: "/funfact1.jpg",
      number: "5000+",
      title: "Clients",
      alt: "Clients Icon",
    },
    {
      id: 2,
      imgSrc: "/funfact2.jpg",
      number: "250+",
      title: "Projects",
      alt: "Projects Icon",
    },
    {
      id: 3,
      imgSrc: "/funfact3.jpg",
      number: "1.5M+",
      title: "Revenue",
      alt: "Revenue Icon",
    },
  ];
  const images = [
    {
      id: 1,
      src: "https://via.placeholder.com/242x110",
    },
    {
      id: 2,
      src: "https://via.placeholder.com/147x110",
    },
    {
      id: 3,
      src: "https://via.placeholder.com/196x110",
    },
    {
      id: 4,
      src: "https://via.placeholder.com/155x110",
    },
  ];

  const boxes = [
    {
      id: 1,
      imgSrc: "/feature1.jpg",
      title: "SUPPORT TEAM",
      content:
        "Lorem ipsum dolor amet, consectetur adipiscing. Ac tortor enim metus, turpis.",
    },
    {
      id: 2,
      imgSrc: "/feature2.jpg",
      title: "CERTIFICATION",
      content:
        "Lorem ipsum dolor amet, consectetur adipiscing. Ac tortor enim metus, turpis.",
    },
    {
      id: 3,
      imgSrc: "/feature3.jpg",
      title: "NATURAL PRODUCTS",
      content:
        "Lorem ipsum dolor amet, consectetur adipiscing. Ac tortor enim metus, turpis.",
    },
  ];

  return (
    <div>
      <section className="bg-white mb-10">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-wrap">
            {/* About text box */}
            <div className="w-full md:w-1/2 p-5 mt-10">
              <Image src="/about-title.png" alt="Product Image" />
              <h3 className="text-[67px] font-light text-[#231942]">
                We, are <br /> Brancy
              </h3>
              <p className="text-[41px] text-[#231942] underline font-light">
                Best cosmetics provider
              </p>
              <p className="text-[21px] text-gray-500 mt-3">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit
                ut aliquam, purus sit amet luctus <br /> venenatis.
              </p>
            </div>

            {/* Image box */}
            <div className="w-full md:w-1/2">
              <div className="relative flex items-center justify-center">
                <Image src="/about1.png" alt="Product Image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funfact Section */}
      <section className="py-12 bg-gray-100 max-w-[1703px] mt-10 mb-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mb-6">
            {funFacts.map((fact) => (
              <div key={fact.id} className="w-full sm:w-1/2 lg:w-1/3 mb-4">
                <div className="text-center bg-[#fff6f5] border-2 border-[#f77669] p-6 shadow-lg rounded-lg w-[370px] h-[268px] mx-auto">
                  <div className="flex justify-center mb-4">
                    <Image
                      src={fact.imgSrc}
                      width={110}
                      height={110}
                      alt={fact.alt}
                      className="text-[#f77669]"
                    />
                  </div>
                  <hr className="border-t border-[#f77669] w-1/2 mx-auto my-4" />
                  <h2 className="funfact-number text-4xl font-bold text-[#3e3e3e]">
                    {fact.number}
                  </h2>
                  <h6 className="funfact-title text-lg font-semibold text-[#4d4d4d] mt-2">
                    {fact.title}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Slider Section */}
      <section className="py-12 mt-[60px]">
        <div className="overflow-x-auto">
          <div className="flex space-x-4">
            {images.map((image) => (
              <div key={image.id} className="flex-none w-[370px] h-[110px]">
                <Image
                  src={image.src}
                  alt={`Image ${image.id}`}
                  width={370} // Fixed width
                  height={110} // Adjusted height
                  className="w-full h-full object-cover" // Use className for styling
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="py-12">
        <div className="flex justify-center">
          <Image
            src="https://via.placeholder.com/1169x745"
            alt="Banner"
            width={1169}
            height={745}
            className="object-cover"
          />
        </div>
      </section>

      {/* Text */}
      <section className="text-center mt-10">
        <h1 className="font-semibold text-[50px] text-[#231942]">
          Best Cosmetics Provider
        </h1>
        <span className="text-[#364958] text-[1rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel arcu
          aliquet sem risus nisl. Neque, <br /> scelerisque in erat lacus
          ridiculus habitant porttitor. Malesuada pulvinar sollicitudin enim,
          quis <br /> sapien tellus est. Pellentesque amet vel maecenas nisi. In
          elementum magna nulla ridiculus sapien <br /> mollis volutpat sit.
          Arcu egestas massa consectetur felis urna porttitor ac.
        </span>
      </section>

      {/* Support */}
      <section className="flex justify-center py-10 bg-gray-100 mt-10">
        {boxes.map((box) => (
          <div key={box.id} className="rounded-lg m-4 p-5 w-[300px]">
            <div className="flex items-center mb-4">
              {" "}
              {/* Sử dụng flex và canh giữa */}
              <Image
                src={box.imgSrc}
                alt={`Image ${box.id}`}
                className="w-20 h-20 object-cover mr-4" // Điều chỉnh kích thước hình ảnh và thêm khoảng cách bên phải
              />
              <h2 className="text-xl font-bold">{box.title}</h2>{" "}
              {/* Bỏ margin-bottom */}
            </div>
            <p className="text-gray-600">{box.content}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default About;
