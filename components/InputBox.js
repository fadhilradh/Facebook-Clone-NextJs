import Image from "next/image";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useRef, useState } from "react";
import { db, storage } from "../firebase";
import firebase from "firebase";

function InputBox({ session }) {
  // const [session] = useSession();
  const inputRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);
  const filepickerRef = useRef(null);

  const sendPost = (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    db.collection("posts")
      .add({
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (imageToPost) {
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(imageToPost, "data_url");

          removeImage();

          uploadTask.on(
            "state_changed",
            null,
            (error) => {
              // ERROR function
              console.log(error);
            },
            () => {
              // COMPLETE function
              storage
                .ref("posts")
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts").doc(doc.id).set(
                    {
                      postImage: url,
                    },
                    { merge: true }
                  );
                });
            }
          );
        }
      });

    inputRef.current.value = "";
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  return (
    <section className="p-4 w-full md:max-w-3xl mt-10 border border-gray-300 bg-white rounded-xl">
      <div className="flex pb-3 space-x-3 items-center border-b-gray-200 border-b">
        <Image
          width={40}
          height={40}
          src={session.user.image}
          alt="profilepic"
          className="flex-shrink rounded-full cursor-pointer"
        />
        <form className="flex w-full">
          <input
            ref={inputRef}
            type="text"
            className="flex-shrink py-2 px-4 w-full bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 
            cursor-pointer focus:outline-none rounded-full"
            placeholder={`What's on your mind, ${session.user.name} ?`}
          />
          <button type="submit" className="hidden" onClick={sendPost}></button>
        </form>

        {imageToPost && (
          <div
            className="flex flex-col items-center justify-center filter 
          hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="picked image"
              src={imageToPost}
              className="h-10 object-contain hover:brightness-105"
            />
            <p
              onClick={removeImage}
              className="text-red-500 text-xs cursor-pointer"
            >
              Remove
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-1 justify-evenly items-center mt-4">
        <div className="feedicon">
          <VideoCameraIcon className="h-8 text-gray-500" />
          <p className="hidden md:inline-flex text-xs sm:text-sm">Live Video</p>
        </div>
        <div onClick={() => filepickerRef.current.click()} className="feedicon">
          <CameraIcon className="h-8 text-green-500" />
          <p className="hidden md:inline-flex text-xs sm:text-sm">
            Photo / Video
          </p>
          <input
            hidden
            ref={filepickerRef}
            type="file"
            onChange={addImageToPost}
          />
        </div>
        <div className="feedicon">
          <EmojiHappyIcon className="h-8 text-gray-500" />
          <p className="hidden md:inline-flex text-xs sm:text-sm">
            Feeling / Activity
          </p>
        </div>
      </div>
    </section>
  );
}

export default InputBox;
