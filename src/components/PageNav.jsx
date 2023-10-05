import { NavLink } from "react-router-dom";
import "./PageNav.css";

function PageNav() {
  return (
    <div>
      <ul className="menu-bar">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/smartphones">Smartphones</NavLink>
        </li>
        <li>
          <NavLink to="/decoration">Home Decoration</NavLink>
        </li>
        <li>
          <NavLink to="/dresses">Dresses</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default PageNav;
