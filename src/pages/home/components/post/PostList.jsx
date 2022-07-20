import { useEffect, useState } from "react";
import PostCard from "./PostCard";

function PostList() {
  const [posts, setPosts] = useState([]);

  const getData = () => {
    fetch("./data/posts.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        setPosts(myJson);
        console.log(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {posts.posts &&
        posts.posts.length > 0 &&
        posts.posts.map((post) => <PostCard key={post.id} post={post} />)}
    </>
  );
}

export default PostList;
