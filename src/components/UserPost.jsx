import axios from "axios";
import { useEffect, useState } from "react";

export const UserPost = () => {
  const [posts, setPosts] = useState();
  const [userId, setUserId] = useState(0);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((res) => {
        setPosts(res.data);
      });
  }, [userId]);

  function handleChange(e) {
    e.preventDefault();
    setUserId(e.target.value);
  }

  return (
    <div>
      <div className="flex flex-col gap-1 place-items-center">
        <h1 className="font-bold text-3xl">User Post</h1>
        <form>
          <label>
            User ID:
            <input
              className="bg-slate-400 rounded-lg p-1 m-1"
              placeholder="User ID"
              type="text"
              value={userId}
              onChange={handleChange}
            />
          </label>
        </form>
        <h1 className="text-2xl font-bold">user's {userId} Posts</h1>
        {posts &&
          posts.map((post) => (
            <div
              className="bg-orange-300 w-[30vw] rounded-md p-5"
              key={post.id}
            >
              <h5 className="bold">User: {post.userId}</h5>
              <h6>Title: {post.title}</h6>
              <p>Body: {post.body}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
