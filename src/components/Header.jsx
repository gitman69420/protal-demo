import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import PersonIcon from "@material-ui/icons/Person";
import SettingsIcon from "@material-ui/icons/Settings";

function Header() {

  const iconStyle = {
    color: "#cceb05",
    fontSize: "large",
    height: "2.25rem",
    width: "2.25rem",
  };

  return (
    <header>
      <div className="header-logo">
        <h1>PROTAL</h1>
      </div>
      <div className="header-search">
        <input placeholder="Search" className="search-bar"></input>
      </div>
      {/* <Router> */}
      <div className="header-icons">
        <Link to={"/settings"}>
          <SettingsIcon
            style={iconStyle}
          />
        </Link>
      </div>
      <div className="header-icons1">
        <Link to={"/myprofile"}>
          <PersonIcon
            style={iconStyle}
          />
        </Link>
      </div>
      <div className="header-icons2">
        <Link to={"/explore"}>
          <FlashOnIcon
            style={iconStyle}
          />
        </Link>
      </div>
      <div className="header-icons3">
        <Link exact to={"/"}>
          <HomeIcon
            style={iconStyle}
          />
        </Link>
      </div>
      {/* </Router> */}
    </header>
  );
}

export default Header;
