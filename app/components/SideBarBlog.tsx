"use client";

import React, { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import Image from "next/image";

const categories = [
  { name: "Accessories", count: 6 },
  { name: "Computer", count: 4 },
  { name: "Covid-19", count: 2 },
  { name: "Electronics", count: 12 },
  { name: "Furniture", count: 9 },
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

interface RecentPost {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
}

const recentPosts: RecentPost[] = Array(3)
  .fill(null)
  .map((_, index) => ({
    id: index + 1,
    title: "Lorem ipsum dolor sit amet conse adipis.",
    date: `Sep ${24 + index}, 2022`,
    imageUrl: "/placeholder.jpg", // Đảm bảo rằng bạn có ảnh placeholder này trong thư mục public
  }));

const SideBarBlog = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagClick = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="space-y-4">
      {/* Search Input */}
      <div className="bg-white p-4 shadow-md rounded-lg">
        <Input type="text" placeholder="Search Here" className="w-full" />
      </div>

      {/* Categories section */}
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <span className="text-red-500 mr-2">○</span>
          Popular Categories
        </h3>
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex items-center justify-between mb-2"
          >
            <span className="text-blue-600 hover:underline cursor-pointer">
              {category.name}
            </span>
            <span className="text-sm text-gray-500">({category.count})</span>
          </div>
        ))}
      </div>

      {/* Recent Posts section */}
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <span className="text-red-500 mr-2">○</span>
          Recent Posts
        </h3>
        {recentPosts.map((post) => (
          <div
            key={post.id}
            className="flex items-start mb-4 pb-4 border-b border-gray-200 last:border-b-0 last:mb-0 last:pb-0"
          >
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={50}
              height={50}
              className="mr-3 object-cover"
            />
            <div>
              <h4 className="text-sm font-medium mb-1 hover:text-blue-600 cursor-pointer">
                {post.title}
              </h4>
              <p className="text-xs text-red-500">{post.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Popular Tags section */}
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <span className="text-red-500 mr-2">○</span>
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <Button
              key={tag}
              size="sm"
              variant={selectedTags.includes(tag) ? "solid" : "bordered"}
              color="primary"
              onClick={() => handleTagClick(tag)}
              className="rounded-full text-xs"
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBarBlog;
