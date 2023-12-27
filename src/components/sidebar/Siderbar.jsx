import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="ct-client">
        <ul className="ul-client">
          <Link to="/account" style={{ textDecoration: "none" }}>
            <li className="si-client">
              <span className="span-client">Your infomation</span>
            </li>
          </Link>
          <Link to="/tickets" style={{ textDecoration: "none" }}>
            <li className="si-client">
              <span className="span-client">Your Ticket</span>
            </li>
          </Link>
          <li className="si-client">
            <span className="span-client">Your Order</span>
          </li>
          <Link to="/notifications" style={{ textDecoration: "none" }}>
            <li className="si-client">
              <span className="span-client">Notifications</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
