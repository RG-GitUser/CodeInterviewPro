
 import React from "react";
 import {useState} from  "react"
 import Auth from "../../utils/auth";

 const Logout = () => {
    const [showLogoutMessage, setShowLogoutMessage] =useState(false);

   const handleLogout = () => {
     Auth.logout();
     setShowLogoutMessage(true);
     setTimeout(()=>setShowLogoutMessage(false),5000);
   };

   return (
   <div>
    <button onClick={handleLogout}>Logout</button>
    {showLogoutMessage && <div>You are logged out </div>}
    </div>
   );
 };

 export default Logout;