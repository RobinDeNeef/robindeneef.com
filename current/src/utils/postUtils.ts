// lib/posts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), 'src/_posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDir).filter(f => f.endsWith('.mdx'));
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(postsDir, `${realSlug}.mdx`);
  const file = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(file);

  return {
    slug: realSlug,
    frontmatter: data,
    content,
  };
}

export function getAllPosts() {
  return getPostSlugs().map((slug) => getPostBySlug(slug));
}