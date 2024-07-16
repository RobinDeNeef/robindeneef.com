import React from 'react';
import { getLastNPosts } from '@/utils/mdxUtils';


function Page() {
    const lastThreePosts = getLastNPosts(3);

    return (
        <div>
            <h1>All Posts</h1>
            <ul>
        {lastThreePosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
        </div>
    );
}

export default Page;