import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="">
      <NavLink className={({isActive}) => isActive ? "active" : ""} to="/" end>Home</NavLink>
      <NavLink className={({isActive}) => isActive ? "active" : ""} to="/stream" end>Streaming</NavLink>
    </nav>
  );
}

export default Navbar;