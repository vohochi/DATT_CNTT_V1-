import BlogDetail from '@/app/components/BlogDetail';
import PageHeader from '@/app/components/PageHeader';
import BlogComment from '@/app/components/BlogComment';
import BlogPost from '@/app/components/BlogPost';
import SendMail from '@/app/components/SendMail';
import Slideshow from '@/app/components/SlideShow';

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
