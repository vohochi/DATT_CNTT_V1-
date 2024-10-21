import Image from 'next/image';
import { FaTimes, FaCheckSquare } from 'react-icons/fa';

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WishlistModal = ({ isOpen, onClose }: WishlistModalProps) => {
  return (
    <aside
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-opacity duration-300 ${
        isOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`}
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-lg modal-dialog modal-dialog-centered flex justify-center rounded">
        <div className="modal-content bg-white rounded-lg shadow-lg">
          <div className="modal-body flex flex-col items-center">
            <div className="bg-[#de6565] w-full rounded-t">
              <button
                type="button"
                className="text-white mx-auto flex items-center justify-center py-1"
                onClick={onClose}
              >
                <FaTimes className="w-6 h-6" />
              </button>
            </div>

            <div className="modal-action-messages flex items-center pt-4">
              <FaCheckSquare className="mr-2" /> Added to wishlist successfully!
            </div>
            <div className="modal-action-product flex flex-col items-center">
              <div className="thumb p-4">
                <Image
                  src="https://via.placeholder.com/466x320"
                  alt="Organic Food Juice"
                  width={466}
                  height={320}
                  className="rounded"
                />
              </div>
              <h4 className="product-name text-lg font-semibold pb-4 text-center">
                <a href="/product-details" className="hover:text-[#de6565]">
                  Readable content DX22
                </a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default WishlistModal;
