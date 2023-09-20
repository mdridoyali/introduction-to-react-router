import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
  const posts = useLoaderData();
console.log(posts)
  return (
    <div>
      <h2>Posts : {posts.length} </h2>
     <div className="grid grid-cols-3 gap-7 ">
     {
        posts.map((post, id) => <Post key={id} post={post} ></Post>)
      }
     </div>
    </div>
  );
};

export default Posts;
