import Navigation from "@/components/Navigation";
import BentoGrid from "@/components/BentoGrid";
import { getLastNPosts } from "@/utils/mdxUtils";



export default function Home() {
  const posts = getLastNPosts(3);

  return (
    <div className="bg-zinc-50">
      <Navigation />

      <main className="">
        <BentoGrid posts={posts}/>
      </main>
    </div>
  );
}

