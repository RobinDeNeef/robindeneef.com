// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { getPostSlugs, getPostBySlug } from '@/utils/postUtils';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

type Params = {
  slug: string;
};

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({
    slug: slug.replace(/\.mdx$/, ''),
  }));
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  console.log('Loading post:', slug);
  try {
    const { default: Post, frontmatter } = await import((`@/_posts/${slug}.mdx`))
    console.log(Post);
    console.log(frontmatter);
    const { frontmatter: fm } = getPostBySlug(slug);

    return (
      <div className="bg-zinc-50">
        <Navigation />
        <article className="mx-auto prose lg:prose-lg max-w-4xl md:py-8 px-4">
          <h1>{fm.title}</h1>
          <Post />
        </article>
        <Footer />
      </div>
    
    );
  } catch (e) {
    console.error('Error loading post:', e);
    notFound();
  }
}
