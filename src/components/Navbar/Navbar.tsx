import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-pill-container">
      <button className="pill selected">Home</button>
      <button className="pill">Blog</button>
    </div>
  );
}

export default Navbar;
