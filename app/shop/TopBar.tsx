const ShopTopBar = () => {
    return (
        <div className="shop-top-bar-area">
            <div className="container mx-auto w-[77%] my-4">
                <div className="shop-top-bar flex flex-col md:flex-row items-center justify-between">
                    {/* Sort by Select */}
                    <select className="select-shoing p-2 rounded-md">
                        <option>Trending</option>
                        <option value="1">Featured</option>
                        <option value="2">Best Selling</option>
                        <option value="3">Alphabetically, A-Z</option>
                        <option value="4">Alphabetically, Z-A</option>
                        <option value="5">Price, low to high</option>
                        <option value="6">Price, high to low</option>
                        <option value="7">Date, new to old</option>
                        <option value="8">Date, old to new</option>
                    </select>

                    {/* On Sale (Mobile) */}
                    <div className="select-on-sale flex items-center mt-4 md:hidden">
                        <span className="mr-2">On Sale :</span>
                        <select className="select-on-sale-form p-2 border border-gray-300 rounded-md">
                            <option selected>Yes</option>
                            <option value="1">No</option>
                        </select>
                    </div>

                    {/* Price Range */}
                    <div className="select-price-range mt-4 md:mt-0 flex gap-4 border-l border-r px-[150px]">
                        <h4 className="title font-bold">Pricing</h4>
                        <div className="select-price-range-slider flex gap-2">
                            <div className="slider-range " id="slider-range">
                                <input
                                    type="range"
                                    className="w-full h-[2px] accent-[#457b9d] bg-gray-300 rounded-lg appearance-none cursor-pointer"
                                    id="customRange"
                                />
                            </div>
                            <div className="slider-labels flex justify-between flex gap-2">
                                <span id="slider-range-value1">0</span>
                                <span>-</span>
                                <span id="slider-range-value2">1000000</span>
                            </div>
                        </div>
                    </div>

                    {/* On Sale (Desktop) */}
                    <div className="select-on-sale hidden md:flex items-center mt-4 md:mt-0">
                        <span className="mr-2">On Sale :</span>
                        <select className="select-on-sale-form p-2 border border-gray-300 rounded-md">
                            <option selected>Yes</option>
                            <option value="1">No</option>
                        </select>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default ShopTopBar;
