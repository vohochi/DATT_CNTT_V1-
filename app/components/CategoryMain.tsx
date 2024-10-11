const CategoryMain = () => {
  return (
    <div className="flex flex-col items-center mt-20 mb-20 ">
      <div className="flex flex-wrap justify-center gap-6 w-[80%]">
        {/* Category Card 1 */}
        <div className="flex flex-col items-center p-6 bg-[#dcffd2] rounded-[10px] w-[calc(100%/2-20px)] md:w-[calc(100%/3-20px)] lg:w-[calc(100%/6-20px)]">
          <img
            className="w-20 h-20"
            src="10006.jpg"
          />
          <hr className="w-10 border-t border-[#ff6565] mt-8 mb-0" />
          <div className="mt-4 text-center text-[#1d4a21] text-base font-medium">
            Hare care
          </div>
        </div>

        {/* Category Card 2 */}
        <div className="flex flex-col items-center p-6 bg-[#ffedb4] rounded-[10px] w-[calc(100%/2-20px)] md:w-[calc(100%/3-20px)] lg:w-[calc(100%/6-20px)]">
          <img
            className="w-20 h-20"
            src="https://via.placeholder.com/80x80"
          />
          <hr className="w-10 border-t border-[#ff6565] mt-8 mb-0" />
          <div className="mt-4 text-center text-[#1d4a21] text-base font-medium">
            Skin care
          </div>
        </div>

        {/* Category Card 3 */}
        <div className="flex flex-col items-center p-6 bg-[#dfe4ff] rounded-[10px] w-[calc(100%/2-20px)] md:w-[calc(100%/3-20px)] lg:w-[calc(100%/6-20px)]">
          <img
            className="w-20 h-20"
            src="https://via.placeholder.com/80x80"
          />
          <hr className="w-10 border-t border-[#ff6565] mt-8 mb-0" />
          <div className="mt-4 text-center text-[#1d4a21] text-base font-medium">
            Lip stick
          </div>
        </div>

        {/* Category Card 4 */}
        <div className="flex flex-col items-center p-6 bg-[#ffeacc] rounded-[10px] w-[calc(100%/2-20px)] md:w-[calc(100%/3-20px)] lg:w-[calc(100%/6-20px)]">
          <img
            className="w-20 h-20"
            src="https://via.placeholder.com/80x80"
          />
          <hr className="w-10 border-t border-[#ff6565] mt-8 mb-0" />
          <div className="mt-4 text-center text-[#1d4a21] text-base font-medium">
            Face skin
          </div>
        </div>

        {/* Category Card 5 */}
        <div className="flex flex-col items-center p-6 bg-[#ffdae0] rounded-[10px] w-[calc(100%/2-20px)] md:w-[calc(100%/3-20px)] lg:w-[calc(100%/6-20px)]">
          <img
            className="w-20 h-20"
            src="https://via.placeholder.com/80x80"
          />
          <hr className="w-10 border-t border-[#ff6565] mt-8 mb-0" />
          <div className="mt-4 text-center text-[#1d4a21] text-base font-medium">
            Blusher
          </div>
        </div>

        {/* Category Card 6 */}
        <div className="flex flex-col items-center p-6 bg-[#fff3da] rounded-[10px] w-[calc(100%/2-20px)] md:w-[calc(100%/3-20px)] lg:w-[calc(100%/6-20px)]">
          <img
            className="w-20 h-20"
            src="https://via.placeholder.com/80x80"
          />
          <hr className="w-10 border-t border-[#ff6565] mt-8 mb-0" />
          <div className="mt-4 text-center text-[#1d4a21] text-base font-medium">
            Natural
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryMain;
