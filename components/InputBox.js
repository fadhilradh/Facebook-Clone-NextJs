import Image from "next/image";

function InputBox({ session }) {
  const sendPost = (el) => {
    el.preventDefault();
  };
  return (
    <section className="p-4 w-full md:max-w-3xl mt-10 md:h-44 border border-gray-300 bg-white rounded-xl">
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
            type="text"
            className="py-2 px-4 w-full bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 
            cursor-pointer focus:outline-none rounded-full ml-3"
            placeholder={`What's on your mind, ${session.user.name} ?`}
          />
          <button type="submit" className="hidden" onClick={sendPost}></button>
        </form>
      </div>
    </section>
  );
}

export default InputBox;
