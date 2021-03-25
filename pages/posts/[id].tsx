import styled from "styled-components";
import { getPost, getPosts } from "../../api/posts";
import { Flex } from "../../components/Flex";
import { Layout } from "../../components/Layout";

interface Post {
  id: number;
  title: string;
  body: string;
}

const StyledPostItem = styled.div`
  & > h1 {
    font-family: 'Oswald', sans-serif;
    font-size: 70px;
    background-color: black;
    color: white;
    display: inline-block;
    line-height: 1;
    text-transform: uppercase;
  }
`;

function PostItem({ post }) {
  const { title, body } = post;
  return (
    <Layout pageName={post.title}>
      <Flex width="50%" margin="50px auto 0" direction="column">
        <StyledPostItem>
          <h1>{title}</h1>
          <h3>{body}</h3>
        </StyledPostItem>
      </Flex>
    </Layout>
  )
}

export async function getStaticPaths() {
  const posts = await getPosts();

  const paths = posts.map((post: Post) => ({ params: { id: post.id.toString() } }));
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.id);
  return { props: { post } }
}

export default PostItem;
