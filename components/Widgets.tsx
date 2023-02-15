import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";

const contacts = [
  // {
  //   name: "Elon Musk",
  //   src: "https://links.papareact.com/kxk",
  // },
  // {
  //   name: "Mark Zuckerberg",
  //   src: "https://links.papareact.com/snf",
  // },
  // {
  //   name: "Bill Gates",
  //   src: "https://links.papareact.com/zvy",
  // },
];

function Widgets() {
  return (
    <div className="hidden md:flex flex-col md:w-72 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>

      {contacts.map((contact) => (
        <Contact key={contact.src} name={contact.name} src={contact.src} />
      ))}
    </div>
  );
}

export default Widgets;
