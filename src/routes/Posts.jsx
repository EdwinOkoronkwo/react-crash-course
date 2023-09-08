import { Outlet } from "react-router-dom";

import PostsList from "../components/PostsList";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.posts;
}

/**
 * 1. Components are simply functions that return JSX code
 * 2. In places where you use JSX you must have one root
 * JSX element like the main element.
 *
 */
