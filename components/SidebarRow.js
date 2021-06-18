function SidebarRow({ Icon, title }) {
  return (
    <div
      className="flex justify-center sm:justify-start items-center w-20 sm:w-full 
    px-5 py-3 hover:bg-gray-100 rounded-lg cursor-pointer"
    >
      <Icon className="h-6 sm:h-8 mr-3 text-blue-500" />
      <p className="hidden sm:inline-flex text-medium">{title}</p>
    </div>
  );
}

export default SidebarRow;
