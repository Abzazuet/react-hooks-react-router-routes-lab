import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const linkStyles = {
    display: "inline-block",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact="true"
        style={linkStyles}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        exact="true"
        style={linkStyles}
      >
        Movies
      </NavLink>
      <NavLink
        to="/directors"
        exact="true"
        style={linkStyles}
      >
        Directors
      </NavLink>
      <NavLink
        to="/actors"
        exact="true"
        style={linkStyles}
      >
        Actors
      </NavLink>

    </div>
  );
}

export default NavBar;
