import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="container navbar-light">
      <NavLink className="navbar-brand active" to="/" end></NavLink>
    </nav>
  );
}

export default Navbar;