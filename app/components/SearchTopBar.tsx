import { FaSearch } from 'react-icons/fa';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-screen p-6 py-16 relative">
        <button
          className="absolute bg-[#ff6565] -mt-2 py-2 px-3 rounded-b-[8px] top-[160px] lg:right-[10px] right-[0] text-[#fff] text-bold hover:bg-[#dc3545]"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="lg:max-w-[80%] sm:max-w-[90%] mx-auto mt-[150px]">
          <p className="text-lg text-[14px] mb-4 text-[#666666]">
            Start typing and press Enter to search
          </p>
          <form action="#" method="post">
            <div className="relative">
              <label htmlFor="SearchInput" className="sr-only">
                Search
              </label>
              <input
                id="SearchInput"
                type="search"
                className="form-input w-full p-6 border border-[#ff6565] text-[#ff6565] rounded-md focus:outline-none focus:border-[#ff6565]"
                placeholder="Search entire store…"
              />
              <button
                className="absolute bg-[#ff6565] h-full border border-[#ff6565] hover:bg-[#dc3545] px-6 rounded-r-[8px] right-0 top-1/2 transform -translate-y-1/2 text-[#fff]"
                type="submit"
              >
                <FaSearch />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
