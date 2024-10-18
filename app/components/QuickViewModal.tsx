import Image from 'next/image';
import { FaStar, FaStarHalf, FaTimes } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const QuickViewModal = ({ isOpen, onClose }) => {
    const [isAnimating, setAnimating] = useState(false);
    const [quantity, setQuantity] = useState(1); // State để quản lý số lượng

    useEffect(() => {
        if (isOpen) {
            setAnimating(true);
        } else {
            const timer = setTimeout(() => {
                setAnimating(false);
            }, 300); 
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const handleIncrease = () => {
        setQuantity((prev) => prev + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    return (
        <aside
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            role="dialog"
            aria-modal="true"
        >
            <div
                className={`w-[75%] max-h-[95%] overflow-auto modal-dialog modal-dialog-centered bg-white rounded-lg shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-y-0' : '-translate-y-12'} ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
            >
                <div className="modal-content ">
                    <div className="modal-body p-8 relative">
                        <div className="flex justify-start">
                            <button type="button" className="text-gray-600 absolute top-2 left-2" onClick={onClose}>
                                <FaTimes className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="product-single-thumb">
                                <Image
                                    src="https://via.placeholder.com/544x560"
                                    width={544}
                                    height={560}
                                    alt="Image-HasTech"
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="product-details-content">
                                <h5 className="text-sm font-semibold text-[16px]">Premium collection</h5>
                                <h3 className="text-[40px] mt-2">Offbline Instant Age Rewind Eraser.</h3>
                                <div className="flex items-center mb-5">
                                    <div className="flex text-yellow-500">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStarHalf />
                                    </div>
                                    <button type="button" className="ml-2 text-gray-600">150 reviews</button>
                                </div>
                                <p className="mb-6 text-gray-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, repellendus. Nam voluptate illo ut quia non sapiente provident alias quos laborum incidunt, earum accusamus, natus. Vero pariatur ut veniam sequi amet consectetur.</p>
                                <div className="flex justify-start my-5">
                                    <div className="flex space-x-2 border-[2px] border-[#de6565] items-center py-2 px-1 rounded-[50px]">
                                        <button onClick={handleDecrease} className="flex items-center px-3 py-1 cursor-pointer border-r" aria-label="Decrease quantity">
                                            -
                                        </button>
                                        <input
                                            type="text"
                                            value={quantity}
                                            onChange={(e) => setQuantity(Math.max(1, e.target.value))}
                                            className='text-center w-[50px] border-none outline-none'
                                            aria-label="Quantity"
                                        />
                                        <button onClick={handleIncrease} className="flex items-center px-3 py-1 cursor-pointer border-l" aria-label="Increase quantity">
                                            +
                                        </button>
                                    </div>
                                </div>
                                <hr className='my-4'/>
                                <div className="flex items-center justify-start space-x-6">
                                    <h4 className="text-[44px] ">$254.22</h4>
                                    <button type="button" className="bg-[#de6565] text-white px-4 py-2 rounded-[50px] hover:bg-[#364958]">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default QuickViewModal;
