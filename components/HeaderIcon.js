function HeaderIcon({ Icon, selected }) {
  return (
    <section
      className={` cursor-pointer border-b-[3px] group ${
        selected
          ? "border-blue-500 text-blue-600 "
          : "border-transparent text-gray-500"
      }`}
    >
      <div
        className={`rounded-2xl border-b-2 border-transparent md:hover:bg-gray-100 py-2 md:px-10  ${
          selected ? " hover:bg-transparent" : " active:border-blue-600"
        }`}
      >
        <Icon className="h-6 sm:h-8 group-hover:text-blue-600" />
      </div>
    </section>
  );
}

export default HeaderIcon;
