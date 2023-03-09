import { NavLinks } from "../../constants";
import Link from "./Link";

const Nav = () => {
  return (
    <nav>
      <ul className="flex items-center gap-2">
        {NavLinks.map((link) => (
          <Link path={link.path} text={link.text} key={link.path} />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
