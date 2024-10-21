"use client";

import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Button,
  Pagination,
} from "@nextui-org/react";

// Giả lập dữ liệu blog
const blogs = Array(20)
  .fill(null)
  .map((_, index) => ({
    id: index + 1,
    title: "Lorem ipsum dolor sit amet consectetur adipiscing.",
    author: "TOMAS DE MOMEN",
    date: `FEBRUARY ${13 + index}, 2021`,
    category: "BEAUTY",
    image: `https://via.placeholder.com/370x320?text=Blog${index + 1}`,
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  }));

const BlogList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        {currentBlogs.map((blog) => (
          <Card key={blog.id} className="w-full">
            <CardBody className="p-0">
              <Image
                src={blog.image}
                alt={blog.title}
                width={570}
                height={320}
                className="w-full h-auto object-cover"
              />
            </CardBody>
            <CardFooter className="flex-col items-start p-4 md:p-6">
              <Button size="sm" color="primary" className="mb-2 text-xs">
                {blog.category}
              </Button>
              <h2 className="text-lg md:text-xl font-bold mb-2">
                {blog.title}
              </h2>
              <p className="text-sm text-gray-600 mb-4">{blog.excerpt}</p>
              <div className="flex justify-between items-center w-full text-xs md:text-sm">
                <span className="text-gray-500">BY: {blog.author}</span>
                <span className="text-gray-500">{blog.date}</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-8 md:mt-12">
        <Pagination
          total={Math.ceil(blogs.length / blogsPerPage)}
          initialPage={1}
          onChange={(page) => setCurrentPage(page)}
          size="sm"
        />
      </div>
    </div>
  );
};

export default BlogList;
