'use client';

import React, { useState } from 'react';
import { Input, Checkbox, Button } from '@nextui-org/react';
// import { Range, getTrackBackground } from "react-range";

const categories = [
  { name: 'Accessories', count: 5 },
  { name: 'Computer', count: 4 },
  { name: 'Covid-19', count: 2 },
  { name: 'Electronics', count: 6 },
  { name: 'Frame Sunglasses', count: 12 },
  { name: 'Furniture', count: 7 },
  { name: 'Genuine Leather', count: 9 },
];

const popularTags = [
  'Beauty',
  'MakeupArtist',
  'Makeup',
  'Hair',
  'Nails',
  'Hairstyle',
  'Skincare',
];

const Sidebar = () => {
  const [values, setValues] = useState([130, 2500]);
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

  return (
    <div className="w-64 bg-white p-4 shadow-md">
      <Input type="text" placeholder="Search Here" className="mb-6" />

      {/* Price Filter section */}
      <div className="mb-6">{/* ... (previous price filter code) ... */}</div>

      {/* Categories section */}
      <div className="mb-6">
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
      <div>
        <h3 className="text-lg font-semibold mb-2">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <Button
              key={tag}
              size="sm"
              variant={selectedTags.includes(tag) ? 'solid' : 'bordered'}
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
