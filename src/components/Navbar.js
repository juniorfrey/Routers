import React from 'react'
import { NavLink } from 'react-router-dom';
import useAuth from '../Auth/useAuth';

const Navbar = () => {
  const auth = useAuth();
    return (
      <nav className="navbar">
        <ul>
          <li>
            <NavLink exact={"exact"} to="/" activeclassname="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact={"exact"} to="/about" activeclassname="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink exact={"exact"} to="/contact" activeclassname="active">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink exact={"exact"} to="/categories" activeclassname="active">
              Categories
            </NavLink>
          </li>
          {!auth.user && (
            <>
              <li>
                <NavLink exact={"exact"} to="/login" activeclassname="active">
                  Login
                </NavLink>
              </li>

              <li>
                <NavLink
                  exact={"exact"}
                  to="/register"
                  activeclassname="active"
                >
                  Register
                </NavLink>
              </li>
            </>
          )}
          {auth.isLogged() && (
            <>
              <li>
                <NavLink
                  exact={"exact"}
                  to="/dashboard"
                  activeclassname="active"
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact={"exact"}
                  to="/payments"
                  activeclassname="active"
                >
                  Payments
                </NavLink>
              </li>
            </>
          )}
          {auth.isLogged() && (
            <li>
              <button className="logout" onClick={auth.logout}>
                Cerrar sessión
              </button>
            </li>
          )}
        </ul>
      </nav>
    );
}

export default Navbar
