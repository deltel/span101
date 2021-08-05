import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./Navbar.css";

import Burger from "../../assets/images/Burger.svg";
import Logo from "../../assets/images/Logo.svg";

import Sidebar from "./Sidebar/Sidebar";

const Navbar = ({ isAuth, handleAuth }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  const openSidebar = () => {
    setShowSidebar(true);
  };

  const handleLogout = (e) => {
    e.preventDefault();

    localStorage.removeItem("token");
    handleAuth(false);
  };

  return (
    <>
      <nav className="Navbar" aria-label="Header">
        <Link to="/">
          <img src={Logo} alt="span 101 logo" />
        </Link>
        <button type="button" onClick={openSidebar}>
          <img src={Burger} alt="menu icon" />
        </button>
        {showSidebar && (
          <Sidebar
            handleClose={closeSidebar}
            isAuth={isAuth}
            handleLogout={handleLogout}
          />
        )}
      </nav>
    </>
  );
};

export default Navbar;
