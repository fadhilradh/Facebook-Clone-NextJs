import Image from "next/image";
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from "@heroicons/react/solid";
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import { signOut } from "next-auth/client";
import fadhPic from "../public/fadh.jpeg";

function Header({ session }) {
    return (
        <div
            className="sticky top-0 z-50 bg-white flex w-full items-center 
     px-3 lg:px-5 pt-1 shadow-md"
        >
            <div className="flex flex-row items-center">
                <Image
                    alt="fb icon"
                    src="/logo.png"
                    width={50}
                    height={50}
                    layout="intrinsic"
                />
                <div className="hidden md:w-3/4 md:flex mb-1 px-5 py-3 bg-gray-100 h-10 items-center rounded-full">
                    <SearchIcon className="h-5 text-gray-800 mr-2" />
                    <input
                        type="text"
                        placeholder="Search Facebook"
                        className=" bg-transparent focus:outline-none"
                    />
                </div>
            </div>

            {/* Center */}
            <div className="flex flex-grow justify-center space-x-4 sm:space-x-2 ">
                <HeaderIcon Icon={HomeIcon} selected />
                <HeaderIcon Icon={FlagIcon} />
                <HeaderIcon Icon={PlayIcon} />
                <HeaderIcon Icon={ShoppingCartIcon} />
                <HeaderIcon Icon={UserGroupIcon} />
            </div>

            {/* Right */}
            <div className="flex justify-end items-center sm:space-x-2">
                <div className="flex items-center sm:mr-3">
                    <Image
                        width={40}
                        height={40}
                        src={session?.user.image && fadhPic}
                        alt="profilepic"
                        className="rounded-full cursor-pointer "
                        onClick={signOut}
                    />
                    <p className="hidden ml-3 font-semibold sm:inline-flex whitespace-nowrap">
                        {session?.user.name}
                    </p>
                </div>

                <div className="flex sm:space-x-2 md:w-72 justify-between ">
                    <BellIcon className="icon" />
                    <ChatIcon className="icon" />
                    <ChevronDownIcon className="icon" />
                    <ViewGridIcon className="icon" />
                    <button
                        onClick={signOut}
                        className="hidden sm:inline-flex px-2 bg-blue-500 text-white rounded-lg py-0 sm:py-2 ml-3 hover:bg-blue-600 focus:outline-none"
                    >
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;
