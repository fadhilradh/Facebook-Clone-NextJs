function SidebarRow({ Icon, title }) {
  return (
    <div
      className="flex justify-center sm:justify-start items-center w-12 sm:w-1/2 
     sm:px-5 py-3 hover:bg-gray-200 rounded-lg cursor-pointer"
    >
      <Icon className="h-6 sm:h-8 sm:mr-3 text-blue-500" />
      <p className="hidden sm:inline-flex text-medium">{title}</p>
    </div>
  );
}

export default SidebarRow;
