import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import { readFile, access } from "fs/promises";
import { notFound } from "next/navigation";
import { log } from "console";

console.log(process.cwd())
const POSTS_FOLDER = path.join(process.cwd(), "_posts");
console.log(POSTS_FOLDER)

async function readPostFile(slug) {
  console.log(slug)
  console.log(POSTS_FOLDER)
  const filePath = path.resolve(path.join(POSTS_FOLDER, `${slug}.mdx`));
  log(filePath)
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
    console.log("hello?")
  if (!markdown) {
    console.log("Error")
    notFound();
  }

  const { content, frontmatter } = await compileMDX({
    source: markdown,
    options: { parseFrontmatter: true },
  });

  // do something with frontmatter, like set metadata or whatever

  return <>{content}</>;
}