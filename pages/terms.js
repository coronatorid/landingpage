import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Head from 'next/head';
import gfm from 'remark-gfm';

const Blog = ({ content, data }) => {
  const frontmatter = data;

  return (
    <>
      <Head>
        <title>{frontmatter.title} | Coronatorasd - Indonesia Covid Application</title>
      </Head>
      <section className="section">
        <div className="container max-w-screen-md">
          <h1>{frontmatter.title}</h1>
          <br />
          <ReactMarkdown
            plugins={[gfm]}
            escapeHtml={false}
            source={content}
          />
        </div>
      </section>
    </>
  )
}

export default Page

Page.getInitialProps = async (context) => {
  const { blog } = context.query
  const content = await import('../public/data/ToS.md')
  const data = matter(content.default)

  return { ...data }
}
