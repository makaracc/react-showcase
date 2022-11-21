import { useState } from "react";

export const Nav = ({ selectedPage, SetSelectedPage }) => {
  const pages = ["Education", "Projects", "Posts", "UserPosts"];

  const handleOnclick = (e) => {
    e.preventDefault();
    SetSelectedPage(e.target.value);
  };

  return (
    <nav className="sticky mb-5">
      <ul className="flex flex-row justify-center items-center">
        {pages.map((page) => (
          <button
            className="bg-gray-600 text-zinc-50 p-3 m-1 rounded-lg"
            id="page"
            value={page}
            key={page}
            onClick={handleOnclick}
          >
            {page}
          </button>
        ))}
      </ul>
    </nav>
  );
};
