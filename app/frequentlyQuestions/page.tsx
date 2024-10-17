'use client';
import { Image } from '@nextui-org/react';
import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const FrequentlyQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
    setActiveIndex(activeIndex === index ? null : index);
  };

  const items = [...Array(8)].map((_, index) => ({
    question: `Accordion Question ${index + 1}`,
    answer: `Đây là câu trả lời cho câu hỏi số ${
      index + 1
    }. Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo.`,
  }));

  return (
    <main className="main-content ">
      {/* Breadcrumb Area */}
      <nav aria-label="breadcrumb" className="bg-[#fffaef] py-10">
        <div className="container mx-auto">
          <ol className="breadcrumb flex justify-center">
            <li className="breadcrumb-item">
              <a href="/index">Home </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {' '}
              &nbsp;/ Faq
            </li>
          </ol>
        </div>
      </nav>
      {/*== Start Faq Area Wrapper ==*/}
      <section className="section-space py-8">
        <div className="container mx-auto w-[77%] my-[100px]">
          <div className="flex flex-col lg:flex-row-reverse lg:justify-between gap-5">
            <div className="lg:w-1/2 xl:w-7/12 flex justify-end">
              <div className="faq-thumb">
                <Image
                  src="https://via.placeholder.com/601x368"
                  width={601}
                  height={368}
                  alt="FAQ Image"
                />
              </div>
            </div>
            <div className="lg:w-1/2 xl:w-5/12 flex justify-start">
              <div className="faq-content max-w-[500px]">
                <div className="faq-text-img">
                  <Image
                    src="faq1.png"
                    width={199}
                    height={169}
                    alt="FAQ Text Image"
                  />
                </div>
                <h2 className="faq-title text-2xl font-semibold text-[41px]">
                  Frequently Questions
                </h2>
                <div className="faq-line my-2 bg-[#ff6565] w-[130px] h-[1px] mt-4"></div>
                <p className="faq-desc text-light text-[#364958] text-[21px] mt-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem has been the industry&apos;s
                  standard.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            {items.map((item, index) => (
              <div key={index} className="py-2">
                <h2
                  onClick={() => toggleAccordion(index)}
                  className={`flex items-center justify-between cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#ff6565] focus:ring-opacity-50 ${
                    activeIndex === index ? 'text-red-500' : 'text-gray-800'
                  }`}
                  tabIndex={0}
                >
                  <span className="w-full bg-[#f8f9fa] py-[20px] px-[18px]">
                    {item.question}
                  </span>
                  <span
                    className={`text-gray-600 bg-[#f8f9fa] py-[20px] px-[18px]`}
                  >
                    {openIndex === index ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </span>
                </h2>
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-40' : 'max-h-0'
                  }`}
                  style={{ height: openIndex === index ? 'auto' : 'auto' }}
                >
                  <div className="p-4 border border-gray-100">
                    <p className="text-gray-500">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*== End Faq Area Wrapper ==*/}
    </main>
  );
};

export default FrequentlyQuestions;
