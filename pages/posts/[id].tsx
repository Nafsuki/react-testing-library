import Link from 'next/link'
import Layout from '../../components/Layout'
import { getAllPostsIds, getPostData } from '../../lib/fetch'
import { POST } from '../../types/Types'
import { GetStaticProps, GetStaticPaths } from 'next'
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'

const PostDetail: React.FC<POST> = ({ id, title, body }) => {
  return (
    <Layout title={title}>
      <p className="m-4">
        {'ID : '}
        {id}
      </p>
      <p className="mb-4 text-xl font-bold">{title}</p>
      <p className="mx-10 mb-12">{body}</p>
      <Link href="/blog-page" passHref>
        <div className="flex cursor-pointer">
          <ChevronDoubleRightIcon className="mr-3 w-6 h-6" />
          <a data-testid="back-blog">Back to blog-page</a>
        </div>
      </Link>
    </Layout>
  )
}

export default PostDetail

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostsIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const post = await getPostData(context.params.id as string)
  return {
    props: {
      ...post,
    },
  }
}
