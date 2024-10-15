import BlogDetail from "./BlogDetail";
import PageHeader from "./PageHeader";
import BlogComment from "./BlogComment";
import BlogPost from "./BlogPost";
import SendMail from "./SendMail";
import Slideshow from "./SlideShow";

export default function Blog() {
  return (
    <>
      <PageHeader />
      <BlogDetail />
      <Slideshow />
      <BlogComment />
      <BlogPost />
      <SendMail />
    </>
  );
}
