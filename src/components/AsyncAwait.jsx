import React, { useState, useEffect } from 'react';

function AsyncAwait() {
    const [posts, setPosts] = useState([]);

    const fetchData = async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPosts(data)
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div style={{
            flex: 1
          }}>
            <h1> Async Await Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <strong>{post.title}</strong> - {post.body}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AsyncAwait;