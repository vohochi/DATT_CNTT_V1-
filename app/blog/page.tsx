import SideBarBlog from '@/app/components/SideBarBlog';
import BlogBanner from '@/app/components/BlogBanner';
import BlogList from '@/app/components/BlogtList';

export default function BlogPage() {
  return (
    <>
      <BlogBanner />
      <div className="container mx-auto px-4 py-8 flex">
        <SideBarBlog />
        <div className="flex-1 ml-8">
          <BlogList />
        </div>
      </div>
    </>
  );
}
