import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinkActiveClasses = "rounded-md bg-sky-900 px-3 py-2 text-lg font-bold text-white mx-3";
  const navLinkInactiveClasses = "rounded-md px-3 py-2 text-lg font-medium text-black hover:bg-gray-100";


  return (
    <nav className="flex items-center justify-center px-6 py-4 bg-white shadow-md">
      <NavLink className={({ isActive }) => isActive ? "active".concat(" " + navLinkActiveClasses) : navLinkInactiveClasses} to="/">Home</NavLink>
      <NavLink className={({ isActive }) => isActive ? "active".concat(" " + navLinkActiveClasses) : navLinkInactiveClasses} to="/stream">Streaming</NavLink>
    </nav>
  );
}

export default Navbar;