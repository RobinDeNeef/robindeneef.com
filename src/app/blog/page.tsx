import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import Navigation from "@/components/Navigation";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import Footer from "@/components/Footer";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Navigation />

      <Container>
        <div className="max-w-4xl mx-auto">
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.featuredImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </div>
      </Container>
      <Footer />

    </main>
  );
}
