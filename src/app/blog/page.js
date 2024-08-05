import Navigation from "@/components/Navigation";
import ArticleCard from "@/components/ArticleCard";
import Block from "@/components/Block";

import { getLastNPosts } from "@/utils/mdxUtils";

export default function Page() {
  const posts = getLastNPosts(12);

  return (
    <div className="bg-zinc-50">
      <Navigation />

      <main className="p-4">
        <div className="mx-auto max-w-4xl lg:max-w-screen-lg">
          <h2 className="text-4xl text-center font-medium text-black">Articles</h2>

          <div className="mx-auto grid grid-cols-9 mt-4 mb-6 grid max-w-2xl gap-x-4 gap-y-6 lg:mx-0 lg:max-w-none">
              {posts.map((post) => (
                <Block className="bg-zinc-800 hover:hover:bg-slate-700 p-2">
                  <ArticleCard post={post} />
                </Block>
              ))}
              </div>
          </div>
      </main>
    </div>
  );
}