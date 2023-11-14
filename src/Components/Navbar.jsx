import { NavLink, Link } from "react-router-dom";
import logoImg from "../assets/Frame.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav-container">
      {/* link to homepage */}
      <Link to="/" className="nav-left">
        <span>
          <img src={logoImg} alt="" width={25} />
        </span>
        <h2>Glory’s Blog</h2>
      </Link>
      <ul className="nav-right">
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/newsletter">Newsletter</NavLink>
        </li>
        <li>
          <NavLink to="/twitter">Twitter</NavLink>
        </li>
      </ul>

      {/* <img src={menuBtn} alt="" /> */}
    </div>
  );
}

export default Navbar;
