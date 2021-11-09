
import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import path from "path";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";

import BlogLink from "@/components/blog/BlogLink"
import BlogH2 from "@/components/blog/BlogH2"
import BlogParagraph from "@/components/blog/BlogParagraph"
import BlogListItem from "@/components/blog/BlogListItem"

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
    a: BlogLink,
    h2: BlogH2,
    p: BlogParagraph,
    li: BlogListItem,
    Head
};

export default function PostPage({ source, frontMatter }) {
  return (
      <>
      <Head>
        <title>Robin De Neef | {frontMatter.title}</title>
      </Head>
      <div className="flex flex-col items-center min-h-screen py-2">
        <article className="max-w-4xl sm:w-full">
            <div className="flex items-center mb-12">
                <h1 className="text-6xl md:text-6xl lg:text-6+xl font-bold tracking-tighter leading-tight md:leading-none text-left">
                    {frontMatter.title}
                </h1>
            </div>
            <main>
                <MDXRemote {...source} components={components} />
            </main>
        </article>
      </div>
      </>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

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
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};