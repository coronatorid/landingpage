import matter from "gray-matter"
import ReactMarkdown from "react-markdown"
import Head from 'next/head'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter showLineNumbers={true} language={language}>
      {value}
    </SyntaxHighlighter>
  )
}

const Page = ({ content, data }) => {
  const frontmatter = data

  return (
    <>
    <Head>
        <title>{frontmatter.title} | Coronator - Indonesia Covid Application</title>
    </Head>
    <section className="section">
        <div className="container max-w-screen-md">
            <h1>{frontmatter.title}</h1>
            <br/>
            <ReactMarkdown
                escapeHtml={false}
                source={content}
                className="text-title"
                renderers={{ code: CodeBlock }}
            />
        </div>
    </section>
    </>
  )
}

export default Page

Page.getInitialProps = async (context) => {
  const { blog } = context.query
  const content = await import('../public/data/PrivacyPolicy.md')
  const data = matter(content.default)

  return { ...data }
}
