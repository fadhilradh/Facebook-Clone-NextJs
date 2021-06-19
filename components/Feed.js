import Stories from "./Stories";
import InputBox from "../components/InputBox";

function Feed({ session }) {
  return (
    <div className="h-screen flex-grow justify-start pb-44 py-6 mr-4 overflow-y-auto scrollbar-hide">
      <div className="max-w-md md:max-w-lg lg:max-w-2xl">
        <Stories />
        <InputBox session={session} />
        {/* Posts */}
      </div>
    </div>
  );
}

export default Feed;
