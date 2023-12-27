import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./register.css"
const Signup = () => {
  const { loading, error, dispatch } = useContext(AuthContext);
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    phone: "",
    city: "",
    country: "",
    email: "",
    // Các trường thông tin khác cần thiết cho đăng ký tài khoản
  });

  const handleChange = (e) => {
    setNewUser((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "REGISTER_START" });
    try {
      const res = await axios.post("/auth/register", newUser);
      dispatch({ type: "REGISTER_SUCCESS", payload: res.data.details });
      setSuccessMessage("Registration successful!");
    } catch (err) {
      dispatch({ type: "REGISTER_FAILURE", payload: err.response.data });
    }
  };
  useEffect(() => {
    if (successMessage) {
      alert(successMessage);
      navigate("/login");
    }
  }, [successMessage, navigate]);
  return (
    <div className="signup">
      <div className="sContainer">
        <h3>Register Account</h3>
        {/* Form đăng ký tài khoản */}
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="sInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="sInput"
        />
        <input
          type="text"
          placeholder="phone"
          id="phone"
          onChange={handleChange}
          className="sInput"
        />
        <input
          type="text"
          placeholder="city"
          id="city"
          onChange={handleChange}
          className="sInput"
        />
        <input
          type="text"
          placeholder="country"
          id="country"
          onChange={handleChange}
          className="sInput"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          onChange={handleChange}
          className="sInput"
        />
        {/* Các trường thông tin khác cho đăng ký */}
        <button disabled={loading} onClick={handleClick} className="sButton">
          Sign Up
        </button>
        <Link to="/login" style={{textDecoration: "none"}}>
          <p>You already have an account? Login</p>
        </Link>
        {error && <span className="sSpan">{error.message}</span>}
      </div>
    </div>
  );
};

export default Signup;
