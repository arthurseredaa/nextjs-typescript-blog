import { getPosts } from '../api/posts'
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';

export default function Home({ posts }) {

  return (
    <Layout pageName="Home">
      <Header />
      {
        posts.map(({title, body}) => (
          <div>
            <h1>{title}</h1>
            <p>{body}</p>
          </div>
        ))
      }
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await getPosts();
  return { props: { posts: res } }
}
