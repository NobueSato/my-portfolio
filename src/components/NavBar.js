import { Outlet, Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function NavBar() {
  return (
    <>
      <nav className="nav-bar">
        <ul className="flex justify-center">
          {/* Make them react-scroll link later */}
          {/* <li className="w-1/4 flex justify-center items-center">
            <Link to="/about">ABOUT</Link>
         </li>
         <li>
            <Link to="/skills">SKILLS</Link>
          </li> */}
          <li>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </li>
          {/* <li>
            <Link to="/projects">PROJECTS</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li> */}
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default NavBar;
