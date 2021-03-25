import { getPosts } from '../api/posts'
import { Flex } from '../components/Flex';
import { Layout } from '../components/Layout';
import { PostCard } from '../components/PostCard';

interface HomeProps {
  posts: Array<{ title: string, body: string, id: number }>
}

export default function Home({ posts }: HomeProps) {

  return (
    <Layout pageName="Home">
      <Flex margin="50px auto 0" width="1200px" wrap="wrap" justify="flex-start">
        {
          posts && posts.map((post) => <PostCard {...post} />)
        }
      </Flex>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await getPosts();
  return { props: { posts: res } }
}
