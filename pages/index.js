import fs from "fs";
import path from "path";
import Head from "next/head";
import matter from "gray-matter";
import Hero from "../components/Hero";
import PostList from "../components/PostList";
import ProjectGrid from "../components/ProjectGrid";
import NewsLetterSignup from "@/components/NewsLetterSignup";
import Footer from "../components/Footer";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";

export default function Home({ posts }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center w-full flex-1 text-center">
        <Hero />
        <PostList posts={posts} />
        {/* <ProjectGrid posts={posts} /> */}
        <div className="max-w-4xl mt-12 sm:w-full mb-12">
          <NewsLetterSignup />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
