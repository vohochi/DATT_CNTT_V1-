import SideBarBlog from '@/app/components/SideBarBlog';
import BlogBanner from '@/app/components/BlogBanner';
import BlogList from '@/app/components/BlogtList';

export default function BlogPage() {
  return (
    <>
      <BlogBanner />
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <SideBarBlog />
        </div>
        <div className="w-full md:w-3/4 md:pl-8">
          <BlogList />
        </div>
      </div>
    </>
  );
}
