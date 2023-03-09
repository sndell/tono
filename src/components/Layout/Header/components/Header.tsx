import { Nav } from "./Nav";

const Header = () => {
  return (
    <div className="my-4 grid h-[40px] grid-cols-nav items-center">
      <div className="text-2xl">Tono</div>
      <Nav />
      <div className="justify-self-end">user</div>
    </div>
  );
};

export default Header;
