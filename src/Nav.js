import React, { useState, useEffect } from "react";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState([]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
        className="nav_logo"
        alt="Netflix Logo"
      />

      <img
        className="nav_avatar"
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="avatar_logo"
      />
    </div>
  );
}

export default Nav;
