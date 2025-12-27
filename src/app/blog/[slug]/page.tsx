import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { SITENAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import Navigation from '@/components/Navigation';
import Footer from "@/components/Footer";

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <Navigation />
      <Container>
        <article className="mx-auto prose lg:prose-lg max-w-4xl md:py-8 px-4 mb-32">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <PostBody content={content} />
        </article>
      </Container>
      <Footer />
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);
  if (!post) {
    return notFound();
  }

  const title = `${post.title} | ${SITENAME}`;

  return {
    title,
    openGraph: {
      title,
      images: [post.featuredImage ],
      // images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
