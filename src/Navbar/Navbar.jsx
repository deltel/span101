import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./Navbar.css";

import Burger from "../assets/images/Burger.svg";
import Logo from "../assets/images/Logo.svg";

import Sidebar from "./Sidebar/Sidebar";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  const openSidebar = () => {
    setShowSidebar(true);
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
        {showSidebar && <Sidebar handleClose={closeSidebar} />}
      </nav>
    </>
  );
};

export default Navbar;
