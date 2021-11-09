import fs from "fs";
import path from "path";
import Head from 'next/head'
import matter from "gray-matter";
import Hero from '../components/Hero'
import PostList from '../components/PostList'
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";



export default function Home({posts}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Robin De Neef</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center w-full flex-1 px-20 text-center">
        <Hero/>
        <PostList posts={posts}/>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <p
          className="flex items-center justify-center"
        >
          Copyright Robin De Neef
        </p>
      </footer>
    </div>
  )
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })

  return { props: { posts } }
}
  