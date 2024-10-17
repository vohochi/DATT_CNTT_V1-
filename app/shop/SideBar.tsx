"use client";

import React, { useState } from "react";
import { Input, Checkbox, Button, Slider } from "@nextui-org/react";
// import { Range, getTrackBackground } from "react-range";

const categories = [
  { name: "Accessories", count: 5 },
  { name: "Computer", count: 4 },
  { name: "Covid-19", count: 2 },
  { name: "Electronics", count: 6 },
  { name: "Frame Sunglasses", count: 12 },
  { name: "Furniture", count: 7 },
  { name: "Genuine Leather", count: 9 },
];

const popularTags = [
  "Beauty",
  "MakeupArtist",
  "Makeup",
  "Hair",
  "Nails",
  "Hairstyle",
  "Skincare",
];

const Sidebar = () => {
  const [priceRange, setPriceRange] = useState([130, 2500]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const STEP = 1;
  const MIN = 130;
  const MAX = 2500;

  const handleCategoryChange = (categoryName: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((cat) => cat !== categoryName)
        : [...prev, categoryName]
    );
  };

  const handleTagClick = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
  };

  return (
    <div className="w-64 space-y-4">
      {/* Search Input */}
      <div className="bg-white p-4 shadow-md rounded-lg">
        <Input type="text" placeholder="Search Here" />
      </div>

      {/* Price Filter section */}
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Price Filter</h3>
        <Slider
          label="Price Range"
          step={STEP}
          minValue={MIN}
          maxValue={MAX}
          value={priceRange}
          onChange={(value) => handlePriceChange(value as number[])}
          className="max-w-md"
        />
        <div className="flex justify-between mt-2">
          <span>${priceRange[0]}</span>
          <span>—</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      {/* Categories section */}
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Categories</h3>
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex items-center justify-between mb-2"
          >
            <Checkbox
              checked={selectedCategories.includes(category.name)}
              onChange={() => handleCategoryChange(category.name)}
              color="primary"
            >
              {category.name}
            </Checkbox>
            <span className="text-sm text-gray-500">({category.count})</span>
          </div>
        ))}
      </div>

      {/* Popular Tags section */}
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <Button
              key={tag}
              size="sm"
              variant={selectedTags.includes(tag) ? "solid" : "bordered"}
              color="primary"
              onClick={() => handleTagClick(tag)}
              className="rounded-full text-sm"
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
