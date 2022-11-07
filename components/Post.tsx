import Image from "next/image";

function Post({ name, image, message, postImage, email, id, timestamp }) {
  return (
    <section className="p-6 w-full md:max-w-3xl mt-6 border border-gray-300 bg-white rounded-xl shadow-md">
      <div className="flex items-center">
        <Image
          width={40}
          height={40}
          src={image}
          alt="profilepic"
          className="flex-shrink rounded-full cursor-pointer"
        />
        <div className="ml-3 ">
          <p className="font-semibold ">{name}</p>
          <p className="font-extralight text-gray-400">
            {new Date(timestamp?.toDate()).toLocaleString()}
          </p>
        </div>
      </div>
      <div className="mt-3">
        <p className="font-light mb-2">{message}</p>
        {postImage && (
          <div className="relative h-56 md:96 bg-white">
            <Image
              objectFit="fill"
              layout="fill"
              src={postImage}
              alt="profilepic"
              className=""
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default Post;
