import { useState } from "react";
import { AllPost } from "./components/AllPost";
import { Cert } from "./components/Cert";
import { Nav } from "./components/Nav";
import { Showcase } from "./components/Showcase";
import { UserPost } from "./components/UserPost";

// Create a portfolio app

// 1 page for education (any cerificates, qualifications you had)

// 1 page for projects showcase (any projects you worked on)

// 1 page for displaying all posts from the API: https://jsonplaceholder.typicode.com/posts

// 1 page for showing post of any specific user from the API: https://jsonplaceholder.typicode.com/posts?userId=1

function App() {
  const [page, setPage] = useState("Posts");
  const rightPage = () => {
    switch (page) {
      case "Education":
        return <Cert />;
      case "Projects":
        return <Showcase />;
      case "Posts":
        return <AllPost />;
      case "UserPosts":
        return <UserPost />;
      default:
        return <Cert />;
    }
  };

  return (
    <div>
      <Nav selectedPage={page} SetSelectedPage={setPage} />
      {rightPage()}
    </div>
  );
}

export default App;
