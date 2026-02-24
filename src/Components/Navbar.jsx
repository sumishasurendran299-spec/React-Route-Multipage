import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          My Application
        </NavLink>

        <div>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ">
              <NavLink
                className="nav-link"
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item ">
              <NavLink
                className="nav-link"
                to="/about"
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/users"
              >
                Users
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
