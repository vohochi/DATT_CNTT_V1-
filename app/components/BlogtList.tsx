'use client';

import React, { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Button,
  Pagination,
} from '@nextui-org/react';
import { Post } from '@/types/PostBlog';
import { fetchAllPost } from '@/app/blog/api/blogFetch';
import Link from 'next/link';
// import { fetchAllPost } from '../blog/api/allPost';

// Giả lập dữ liệu blog
const blogs = Array(20)
  .fill(null)
  .map((_, index) => ({
    id: index + 1,
    title: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
    author: 'TOMAS DE MOMEN',
    date: `FEBRUARY ${13 + index}, 2021`,
    category: 'BEAUTY',
    image: `https://via.placeholder.com/370x320?text=Blog${index + 1}`,
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  }));

const BlogList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = posts.slice(indexOfFirstBlog, indexOfLastBlog);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await fetchAllPost();

        setPosts(data);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };

    getPosts();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        {currentBlogs.map((blog) => (
          <Link key={blog.id} href={`/blogdetail/${blog.id}`}>
            <Card className="w-full">
              <CardBody className="p-0">
                <Image
                  src={blog.thumbnail}
                  alt={blog.title}
                  width={570}
                  height={320}
                  className="w-full h-auto object-cover"
                />
              </CardBody>
              <CardFooter className="flex-col items-start p-4 md:p-6">
                <Button size="sm" color="primary" className="mb-2 text-xs">
                  {blog.tags}
                </Button>
                <h2 className="text-lg md:text-xl font-bold mb-2">
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4">{blog.slug}</p>
                <div className="flex justify-between items-center w-full text-xs md:text-sm">
                  <span className="text-gray-500">BY: {blog.author}</span>
                  <span className="text-gray-500">{blog.updated_at}</span>
                </div>
              </CardFooter>
            </Card>
          </Link>
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
