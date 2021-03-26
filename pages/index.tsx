import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from '../api/posts'
import { Flex } from '../components/Flex';
import { Layout } from '../components/Layout';
import { PostCard } from '../components/PostCard';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { setPosts } from '../redux/actions/posts';

interface HomeProps {
  data: Array<{ title: string, body: string, id: number }>
}

export default function Home({ data }: HomeProps) {
  const dispatch = useDispatch();
  const posts = useTypedSelector(state => state.posts.posts);
  useEffect(() => {
    dispatch(setPosts(data))
  }, [])

  return (
    <Layout pageName="Home">
      <Flex margin="50px auto 0" width="1200px" wrap="wrap" justify="flex-start">
        {
          posts && posts.length > 0 ? posts.map((post) => {
            if(post.title && post.body) {
              return <PostCard key={post.id} {...post} />
            }
          }) : (
            <h1 style={{margin: "200px auto 0", opacity: ".3"}}>Cannot find any post :(</h1>
          )
        }
      </Flex>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await getPosts();
  return { props: { data: res } }
}
