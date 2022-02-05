import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import path from "path";
import { logFilePaths, LOGS_PATH } from "../../utils/mdxUtils";

import Footer from "@/components/Footer";
import NewsLetterSignup from "@/components/NewsLetterSignup";
import BlogLink from "@/components/blog/BlogLink";
import BlogH2 from "@/components/blog/BlogH2";
import BlogH3 from "@/components/blog/BlogH3";
import BlogParagraph from "@/components/blog/BlogParagraph";
import BlogListItem from "@/components/blog/BlogListItem";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: BlogLink,
  h2: BlogH2,
  h3: BlogH3,
  p: BlogParagraph,
  li: BlogListItem,
  Head,
};

export default function LogPage({ slug, source, frontMatter }) {
  return (
    <>
      <Head>
        <title>Robin De Neef | {frontMatter.title}</title>
        <meta name="description" content={frontMatter.description} />
        <meta property="og:title" content={frontMatter.title} />
        <meta property="og:description" content={frontMatter.description} />
        <meta property="og:image" content={frontMatter.featuredImage} />
        <meta
          property="og:url"
          content={"https://robindeneef.com/makerlog/" + slug}
        />
        <meta property="og:type" content="article" />
      </Head>
      <div className="flex flex-col items-center min-h-screen py-2 px-5 lg:px-0">
        <article className="max-w-4xl sm:w-full lg:px-4">
          <div className="flex items-center mb-4 lg:mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-6+xl font-bold tracking-tighter leading-tight md:leading-none text-left">
              {frontMatter.title}
            </h1>
          </div>
          <main className="mb-12">
            <MDXRemote {...source} components={components} />
          </main>
          <div className="mb-12">
            <NewsLetterSignup />
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const logFilePath = path.join(LOGS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(logFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    components,
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      slug: params.slug,
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = logFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
