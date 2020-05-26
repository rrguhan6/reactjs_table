import React from "react";

import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <div className="header">
        <a href="#default" className="logo">
          CompanyLogo
        </a>
        <div className="header-right">
          <Link to="/">Home</Link>
          <Link to="/form">Form</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
