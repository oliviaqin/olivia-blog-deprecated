import { useRouter } from 'next/router';
import BlogTemplate from '../../components/BlogTemplate/blog_template';
import { imageList, blogContent } from '../data/_const';

export default function Post ({post}) {
  const router = useRouter();
  const { id } = router.query.id;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>No data found for this post.</div>;
  }

  return (<BlogTemplate title={post.title} photos={post.photos} />);
};

// Get image info based on the id
export async function getStaticProps({ params }) {
  const image = imageList.find(img => img.id === params.id);
  const post = image ? blogContent[image.blogKey] : null;

  return {
    props: { 
      post,
    },
  };
}

export async function getStaticPaths() {
  const paths = imageList.map((image) => ({
    params: { id: image.id },
  }));

  return {
    paths,
    fallback: true, // true or 'blocking'
  };
}