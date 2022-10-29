import React from "react";

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <a className="nav-link active" href="#">
            Day
          </a>
          <a className="nav-link " href="#">
            Week
          </a>
          <a className="nav-link " href="#">
            Month
          </a>
          <a className="nav-link " href="#">
            Year
          </a>
        </nav>
      </header>
    </>
  );
};

export default Header;
