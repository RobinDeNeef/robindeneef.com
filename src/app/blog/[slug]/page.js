import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import { readFile, access, readdir } from "fs/promises";
import { notFound } from "next/navigation";
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

export async function generateStaticParams() {
  const files = await readdir(POSTS_FOLDER);
  const slugs = files.map(file => file.replace(/\.mdx$/, ''));
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }) {
  const markdown = await readPostFile(params.slug);
  if (!markdown) {
    return {
      title: 'Post Not Found',
      description: 'The requested post could not be found.'
    };
  }

  const { frontmatter } = await compileMDX({
    source: markdown,
    options: { parseFrontmatter: true },
  });

  return {
    title: frontmatter.title,
    description: frontmatter.description || 'A blog post on robindeneef.com',
  };
}

export default async function PostPage({ params }) {
  const markdown = await readPostFile(params.slug);
  if (!markdown) {
    notFound();
  }

  const { content, frontmatter } = await compileMDX({
    source: markdown,
    options: { parseFrontmatter: true },
  });

  return (
    <div className="bg-zinc-50">
      <Navigation />
      <main className="mx-auto prose lg:prose-lg max-w-4xl md:py-8 px-4">
        <h1>{frontmatter.title}</h1>
        {content}
      </main>
      <Footer />
    </div>
  );
}