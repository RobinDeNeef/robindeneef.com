import Link from "next/link";

function ProjectGrid({ posts }) {
  return (
    <section className="flex flex-wrap max-w-4xl mt-6 sm:w-full">
      <div className="lg:px-4 lg:mt-8 ">
        <h2 className="text-left text-2xl font-bold text-gray-900 lg:text-4xl dark:text-white">
          🛠️ Projects
        </h2>
      </div>
      <div className="flex flex-wrap -m-4 lg:px-4">
        {posts.map((post, index) => (
          <Link
            as={`/blog/${post.filePath.replace(/\.mdx?$/, "")}`}
            href={`/blog/[slug]`}
            key={"post-" + index}
          >
            <a className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
              <h3 className="text-2xl font-bold">{post.data.title}</h3>
              <p className="mt-4 text-xl">Moving to Hugo</p>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ProjectGrid;
