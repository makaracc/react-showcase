import axios from "axios";
import { useEffect, useState } from "react";

export const AllPost = () => {
  const [posts, setPosts] = useState();

  function getPosts() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setPosts(res.data);
    });
    return <>Loading ... </>;
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="flex flex-col gap-1 place-items-center">
      <h1 className="font-bold text-3xl">All Posts</h1>
      {posts
        ? posts.map((post) => (
            <div
              className="bg-orange-300 w-[30vw] rounded-md p-5"
              key={post.id}
            >
              <h5 className="bold">User: {post.userId}</h5>
              <h6>Title: {post.title}</h6>
              <p>Body: {post.body}</p>
            </div>
          ))
        : getPosts()}
    </div>
  );
};
