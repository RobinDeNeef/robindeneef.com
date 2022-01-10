import Link from "next/link";

function PostList({ posts }) {
  const postsByYear = {};
  posts.forEach((post) => {
    const year = post.data.date.substring(0, 4);
    if (postsByYear.hasOwnProperty(year)) {
      postsByYear[year].push(post);
    } else {
      postsByYear[year] = [post];
    }
  });

  return (
    <section className="flex flex-wrap max-w-4xl mt-6 sm:w-full mx-5 lg:mx-0">
      <div className="w-full lg:px-4 lg:mt-8 ">
        <h2 className="w-full text-left mb-5 lg:mb-10 text-3xl font-bold text-gray-900 lg:text-4xl dark:text-white">
          📝 Writings
        </h2>
      </div>
      <div className="lg:-m-4 lg:px-4">
        {Object.entries(postsByYear)
          .sort()
          .reverse()
          .map(([year, postList]) => (
            <div key={"list" + year} className="flex flex-col mb-6 lg:px-4">
              <h2
                key={year}
                className="text-2xl lg:text-3xl text-left font-bold"
              >
                {year}
              </h2>
              <div>
                {postList.reverse().map((post, index) => (
                  <Link
                    as={`/blog/${post.filePath.replace(/\.mdx?$/, "")}`}
                    href={`/blog/[slug]`}
                    key={"post-" + index}
                  >
                    <a className="w-full mb-1 text-left hover:text-blue-600 focus:text-blue-600">
                      <h3 className="text-xl lg:text-2xl font-bold">
                        ✉️ {post.data.title}
                      </h3>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default PostList;
