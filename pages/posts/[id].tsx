import { getPost, getPosts } from "../../api/posts";
import { Layout } from "../../components/Layout";

function PostItem({post}) {
  return (
    <Layout pageName={post.title}>
      Post item {post.id}
    </Layout>
  )
}

export async function getStaticPaths() {
  const posts = await getPosts();

  const paths = posts.map((post: { id: number, title: string, body: string }) => ({ params: { id: post.id.toString() } }));
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.id);
  return { props: { post } }
}

export default PostItem;
