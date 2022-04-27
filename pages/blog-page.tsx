import Layout from '../components/Layout'
import { getAllPostsData, getPostData } from '../lib/fetch'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Post from '../components/Post'
import { POST } from '../types/Types'

interface STATICPROPS {
  posts: POST[]
}

const BlogPage: React.FC<STATICPROPS> = ({ posts }) => {
  return (
    <Layout title="Blog">
      <p className="text-4xl mb-10">Blog Page</p>
      <ul>{posts && posts.map((post) => <Post key={post.id} {...post} />)}</ul>
    </Layout>
  )
}
export default BlogPage

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPostsData()
  return {
    props: { posts },
  }
}
