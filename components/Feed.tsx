import Stories from "./Stories";
import InputBox from "../components/InputBox";
import Posts from "../components/Posts";

function Feed({ session }) {
  return (
    <div className="h-screen flex-grow justify-center md:justify-start pb-44 py-6 md:mr-4 ml-3 md:ml-0 overflow-y-auto scrollbar-hide">
      <div className="max-w-[93%] md:max-w-lg lg:max-w-2xl">
        <Stories />
        <InputBox session={session} />
        <Posts />
      </div>
    </div>
  );
}

export default Feed;
