import React from "react";
import { useState } from "react";
import Auth from "../../utils/auth";
import "./logout.css";

const Logout = () => {
  Auth.logout();

  // const [showLogoutMessage, setShowLogoutMessage] = useState(false);

  // const handleLogout = () => {
  //   Auth.logout();
  //   setShowLogoutMessage(true);
  //   setTimeout(() => setShowLogoutMessage(false), 5000);
  // };

  // return (
  //   <div>
  //     <button className="logout-button" onClick={handleLogout}>
  //       Logout
  //     </button>
  //     {showLogoutMessage && <div>You are logged out </div>}
  //   </div>
  // );
};

export default Logout;
