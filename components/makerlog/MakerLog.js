import Link from "next/link";

function MakerLog({ logs }) {
  return (
    <section className="flex flex-wrap max-w-4xl mt-6 sm:w-full">
      <div className="-m-4 lg:px-4">
        {logs.map((post, index) => (
          <Link
            as={`/makerlog/${post.filePath.replace(/\.mdx?$/, "")}`}
            href={`/makerlog/[slug]`}
            key={"log-" + index}
          >
            <a className="w-full mb-1 text-left hover:text-blue-600 focus:text-blue-600">
              <h3 className="text-2xl font-bold">{post.data.title}</h3>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default MakerLog;
