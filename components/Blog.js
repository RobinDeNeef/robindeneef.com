import Link from 'next/link'

function Blog({ posts }) {
    console.log(posts)
    return (
      <section className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
        <div className="flex flex-wrap w-full mb-12">
          <div className="lg:w-1/2 w-full mb-4 lg:mb-0">
            <h2 className="sm:text-4xl text-3xl font-bold mb-2 text-gray-900 text-left">
              Blogposts
            </h2>
            <div className="h-1 w-20 bg-blue-500 rounded"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {posts.map((post, index) => (
            <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
                href={`/posts/[slug]`}
            >
                <a
                    className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                    key={"post-" + index}
                >
                    <h3 className="text-2xl font-bold">{post.data.title}</h3>
                    <p className="mt-4 text-xl">
                        Moving to Hugo
                    </p>
                </a>
            </Link>
            
          ))}
        </div>
      </section>
    );
  }
  
  export default Blog;