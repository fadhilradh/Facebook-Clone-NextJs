import Image from "next/image";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useRef } from "react";

function InputBox({ session }) {
  const inputRef = useRef(null);
  const inputValue = inputRef.current.value;

  const sendPost = (el) => {
    el.preventDefault();
  };

  return (
    <section className="p-4 w-full md:max-w-3xl mt-10 border border-gray-300 bg-white rounded-xl">
      <div className="flex flex-row pb-3 border-b-gray-200 border-b">
        <Image
          width={40}
          height={40}
          src={session.user.image}
          alt="profilepic"
          className="rounded-full cursor-pointer "
        />
        <form className="flex flex-1">
          <input
            ref={inputRef}
            type="text"
            className="py-2 px-4 w-full bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 
            cursor-pointer focus:outline-none rounded-full ml-3"
            placeholder={`What's on your mind, ${session.user.name} ?`}
          />
          <button type="submit" className="hidden" onClick={sendPost}></button>
        </form>
      </div>

      <div className="flex flex-1 justify-evenly items-center mt-4">
        <div className="flex items-center space-x-2 hover:bg-gray-100 px-8 py-1 rounded-xl">
          <VideoCameraIcon className="h-8 text-red-500" />
          <p className="text-xs sm:text-sm">Live Video</p>
        </div>
        <div className="flex items-center space-x-2 hover:bg-gray-100 px-8 py-1 rounded-xl">
          <CameraIcon className="h-8 text-green-500" />
          <p className="text-xs sm:text-sm">Photo / Video</p>
        </div>
        <div className="flex items-center space-x-2 hover:bg-gray-100 px-8 py-1 rounded-xl">
          <EmojiHappyIcon className="h-8 text-yellow-500" />
          <p className="text-xs sm:text-sm">Feeling / Activity</p>
        </div>
      </div>
    </section>
  );
}

export default InputBox;
