import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import { readFile, access } from "fs/promises";
import { notFound } from "next/navigation";
import { log } from "console";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";


const POSTS_FOLDER = path.join(process.cwd(), "_posts");

async function readPostFile(slug) {
  const filePath = path.resolve(path.join(POSTS_FOLDER, `${slug}.mdx`));
  try {
    await access(filePath);
  } catch (err) {
    return null;
  }

  const fileContent = await readFile(filePath, { encoding: "utf8" });
  return fileContent;
}

export default async function PostPage({
  params}){
  const markdown = await readPostFile(params.slug);
  if (!markdown) {
    notFound();
  }

  const { content, frontmatter } = await compileMDX({
    source: markdown,
    options: { parseFrontmatter: true },
  });

  // do something with frontmatter, like set metadata or whatever

  return (
  <div className="bg-zinc-50">
    <Navigation/>
    <main className="mx-auto prose lg:prose-lg max-w-prose ">
      <h1>{frontmatter.title}</h1>
      {content}
    </main>
    <Footer/>
  </div>);
}