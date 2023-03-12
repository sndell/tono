import { LinkType } from "../../types";
import { Link as RouterLink, useLocation } from "react-router-dom";
import Caret from "./Caret";

const Link = ({ path, text }: LinkType) => {
  const active = useLocation().pathname === path;

  return (
    <li className="h-40px relative cursor-pointer select-none py-2 px-3">
      <RouterLink to={path}>
        {active && <Caret />}
        <div className="relative z-10">{text}</div>
      </RouterLink>
    </li>
  );
};

export default Link;
