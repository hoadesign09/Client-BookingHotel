import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { loading, error, dispatch } = useContext(AuthContext);
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
      navigate("/login");
    } catch (err) {
      dispatch({ type: "REGISTER_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="signup">
      <div className="sContainer">
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
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Signup;
