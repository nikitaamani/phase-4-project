import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/books" className="nav-link">
        Books
      </NavLink>
      <NavLink to="/login" className="nav-link">
        Login
      </NavLink>
      <NavLink to="/signup" className="nav-link">
        Signup
      </NavLink>
      <NavLink to="/contact" className="nav-link">
        Contacts
      </NavLink>
    </nav>
  );
}

export default NavBar;