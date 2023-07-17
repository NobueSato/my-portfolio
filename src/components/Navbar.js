import { Outlet, Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function NavBar() {
  return (
    <>
      <nav className="w-full overflow-auto">
        <ul className="flex">
          <li className="w-1/4 flex justify-center items-center">
            <Link to="/about" className="float-left text-white">ABOUT</Link>
         </li>
         <li className="w-1/4 flex justify-center items-center">
            <Link to="/skills" className="float-left text-white ">SKILLS</Link>
          </li>
          <li className="w-1/4 flex justify-center items-center">
            <Link to="/" className="float-left"><img src={logo} alt="Logo" className="h-10 w-auto" /></Link>
          </li>
          <li className="w-1/4 flex justify-center items-center">
            <Link to="/projects" className="float-left text-white">PROJECTS</Link>
          </li>
          <li className="w-1/4 flex justify-center items-center">
            <Link to="/contact" className="float-left text-white">CONTACT</Link>
          </li>
       </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default NavBar;
