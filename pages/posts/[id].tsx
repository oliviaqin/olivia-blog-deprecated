import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';
import BlogTemplate from '../../components/BlogTemplate/blog_template';
import { imageList, blogContent } from '../../data/constants';
import { BlogPost } from '../../types';

interface PostProps {
  post: BlogPost | null;
}

export default function Post({ post }: PostProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>No data found for this post.</div>;
  }

  return <BlogTemplate title={post.title} photos={post.photos} />;
}

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
  const image = imageList.find(img => img.id === params?.id);
  const post = image ? blogContent[image.blogKey] : null;

  return {
    props: { post },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = imageList.map(image => ({
    params: { id: image.id },
  }));

  return {
    paths,
    fallback: true,
  };
};

