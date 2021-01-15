import matter from "gray-matter"
import ReactMarkdown from "react-markdown"
import Head from 'next/head'
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import gfm from 'remark-gfm'

// const CodeBlock = ({ language, value }) => {
//   return (
//     <SyntaxHighlighter showLineNumbers={true} language={language}>
//       {value}
//     </SyntaxHighlighter>
//   )
// }

const Blog = ({ content, data }) => {
  const frontmatter = data

  return (
    <>
    <Head>
        <title>{frontmatter.title} | Coronatorasd - Indonesia Covid Application</title>
    </Head>
    <section className="section">
        <div className="container max-w-screen-md">
            <h1>{frontmatter.title}</h1>
            <br/>
            <ReactMarkdown
                plugins={[gfm]}
                escapeHtml={false}
                source={content}
                // renderers={{ code: CodeBlock }}
            />
        </div>
    </section>
    </>
  )
}

export default Blog

Blog.getInitialProps = async (context) => {
  const { blog } = context.query
  const content = await import('../public/data/ToS.md')
  const data = matter(content.default)

  return { ...data }
}
