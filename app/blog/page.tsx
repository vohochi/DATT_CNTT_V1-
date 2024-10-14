import SideBarBlog from "./SideBarBlog";
import BlogBanner from "./BlogBanner";
import BlogList from "./BlogtList";

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
