const Header = () => {
  return (
    <div className="my-4 grid h-[40px] grid-cols-nav items-center">
      <div className="text-2xl">Tono</div>
      <nav>
        <ul className="flex items-center gap-2">
          <li className="h-40px relative cursor-pointer py-2 px-3">
            <div className="absolute inset-0 rounded-full bg-white"></div>
            <div className="relative">All tasks</div>
          </li>
          <li className="h-40px cursor-pointer  py-2 px-3">Open</li>
          <li className="h-40px cursor-pointer  py-2 px-3">Closed</li>
        </ul>
      </nav>
      <div className="justify-self-end">user</div>
    </div>
  );
};

export default Header;
