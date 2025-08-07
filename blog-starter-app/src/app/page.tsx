import Navigation from "@/components/Navigation";
import BentoGrid from "@/components/BentoGrid";
import { getAllPosts } from "@/lib/api";



export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div>
      <Navigation />

      <main className="">
        <BentoGrid posts={posts}/>
      </main>
    </div>
  );
}

