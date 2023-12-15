import { useContext } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/">
          <span className="logo">Booking App</span>
        </Link>
        {user ? (
          user.username
        ) : (
          <div className="navItems">
            <Link to="/login">
              <button className="navButton">Login</button>
            </Link>
            <button className="navButton">Register</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
