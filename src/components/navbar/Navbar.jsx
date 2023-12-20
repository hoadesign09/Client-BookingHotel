import { useContext } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout(); // Gọi hàm logout khi người dùng nhấn nút đăng xuất
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/">
          <span className="logo">Booking App</span>
        </Link>
        {user ? (
          <>
            <span>{user.username}</span>
            <button className="navButton" onClick={handleLogout}>
              Logout
            </button>{" "}
            {/* Thêm nút Logout */}
          </>
        ) : (
          <div className="navItems">
            <Link to="/login">
              <button className="navButton">Login</button>
            </Link>
            <Link to="/register">
              <button className="navButton">Register</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
