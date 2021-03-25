import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getPost, getPosts } from "../../api/posts";
import { Comments } from "../../components/Comments";
import { Flex } from "../../components/Flex";
import { Layout } from "../../components/Layout";
import { setComments, setCurrentPost, setIsUpdate } from "../../redux/actions/posts";
import Link from "next/link";
import { Button } from "@material-ui/core";

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
    line-height: 1.2;
    text-transform: uppercase;
  };
  & > h3 {
    line-height: 1.5;
    font-weight: 400;
  }
`;

function PostItem({ post }) {
  const dispatch = useDispatch();

  const { title, body, comments, id } = post;

  useEffect(() => {
    dispatch(setComments(comments));
  }, [])

  const handleUpdate = () => {
    dispatch(setCurrentPost(id));
    dispatch(setIsUpdate(true));
  }

  return (
    <Layout pageName={post.title}>
      <Flex width="50%" margin="50px auto 0" direction="column">
        <Flex justify="flex-end" width="40%" self="flex-end">
          <Link href={`/posts/new`}>
            <Button variant="outlined" onClick={handleUpdate}>
              Update
          </Button>
          </Link>
        </Flex>
        <StyledPostItem>
          <h1>{title}</h1>
          <h3>{body}</h3>
        </StyledPostItem>
        <Comments postId={id} />
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
