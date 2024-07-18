import Link from 'next/link';
import React from 'react';

const ArticleCard = ({post}) => {
    return (
        <Link href={"/posts/" + post.id.replace(".mdx", "")}>
        <article key={post.id} className="flex flex-col p-4 items-start justify-between rounded-lg h-full md:justify-normal hover:bg-slate-700">
                <div className="relative w-full">
                  <img
                    alt=""
                    src={post.featuredImage}
                    className="aspect-[16/9] w-full rounded-2xl bg-grayd-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-300">
                      {new Date(post.date).toDateString()}
                    </time>
                    <a
                      // href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.tags[0]}
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-200 group-hover:text-gray-300">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-300">{post.description}</p>
                  </div>
                </div>
              </article>
      </Link>
    );
};

export default ArticleCard;