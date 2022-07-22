import useFetch from "../../../../hooks/useFetch";
import PostCard from "./PostCard";

function PostList() {
  const [data] = useFetch("./data/posts.json");

  return (
    <>
      {data.posts &&
        data.posts.length > 0 &&
        data.posts.map((post) => <PostCard key={post.id} post={post} />)}
    </>
  );
}

export default PostList;
