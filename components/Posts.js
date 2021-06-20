import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Post from "./Post";

function Posts() {
  const [realtimePosts, loading, error] = useCollection(
    db.collection("posts").orderBy("timestamp", "desc")
  );
  return (
    <div>
      {realtimePosts?.docs.map((post) => (
        <Post
          key={post.id}
          name={post.data().name}
          email={post.data().email}
          message={post.data().message}
          timestamp={post.data().timestamp}
          postImage={post.data().postImage}
          image={post.data().image}
        />
      ))}
    </div>
  );
}

export default Posts;
