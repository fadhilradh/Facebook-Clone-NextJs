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

function Header() {
  return (
    <div
      className="sticky top-0 z-50 bg-white flex w-full items-center 
    justify-between px-3 lg:px-5 pt-1 shadow-md"
    >
      <div className="flex flex-row items-center">
        <Image
          alt="fb icon"
          src="/logo.png"
          width={50}
          height={50}
          layout="intrinsic"
        />
        <div className="hidden md:flex mb-1 px-5 py-3 bg-gray-100 h-10 items-center rounded-full">
          <SearchIcon className="h-5 text-gray-800 mr-2" />
          <input
            type="text"
            placeholder="Search Facebook"
            className=" bg-transparent focus:outline-none"
          />
        </div>
      </div>

      {/* Center */}
      <div className="flex space-x-6 sm:space-x-2 ">
        <HeaderIcon Icon={HomeIcon} selected />
        <HeaderIcon Icon={FlagIcon} />
        <HeaderIcon Icon={PlayIcon} />
        <HeaderIcon Icon={ShoppingCartIcon} />
        <HeaderIcon Icon={UserGroupIcon} />
      </div>

      {/* Right */}
      <div className="flex justify-end items-center sm:space-x-2">
        <div className="flex items-center justify-end mr-3">
          <Image width={50} height={50} src="/logo.png" alt="profilepic" />
          <p className="hidden font-semibold sm:inline-flex whitespace-nowrap">
            Fadhil Radhian
          </p>
        </div>

        <div className="flex justify-end sm:space-x-2 ">
          <BellIcon className="icon" />
          <ChatIcon className="icon" />
          <ChevronDownIcon className="icon" />
          <ViewGridIcon className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
