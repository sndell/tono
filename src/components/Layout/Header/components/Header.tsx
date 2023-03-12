import { User } from "../../../../features/user";
import { Nav } from "./Nav";

const Header = () => {
  return (
    <div className="my-4 grid items-center max-sm:grid-cols-[fit-content_fit-content] max-sm:gap-4 sm:grid-cols-nav">
      <div className="text-2xl max-sm:col-start-1 max-sm:col-end-2">Tono</div>
      <div className="flex justify-center max-sm:col-start-1 max-sm:col-end-3 max-sm:row-start-2">
        <Nav />
      </div>
      <div className="justify-self-end max-sm:col-start-2 max-sm:col-end-3 max-sm:row-start-1">
        <User />
      </div>
    </div>
  );
};

export default Header;
