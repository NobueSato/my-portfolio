import { Outlet, Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function NavBar() {
  return (
    <>
      <nav className="nav-bar w-full overflow-hidden">
        <ul className="flex">
          <li>
            <Link to="section2" smooth={true} duration={500}>ABOUT</Link>
         </li>
         <li>
            <Link to="section3" smooth={true} duration={500}>SKILLS</Link>
          </li>
          <li>
            <Link to="/"><img src={logo} alt="Logo" className="h-32 w-auto" /></Link>
          </li>
          <li>
            <Link to="section4" smooth={true} duration={500}>PROJECTS</Link>
          </li>
          <li>
            <Link to="section5" smooth={true} duration={500}>CONTACT</Link>
          </li>
       </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default NavBar;
