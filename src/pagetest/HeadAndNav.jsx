import React from "react";
import {Link, Outlet} from "react-router-dom";


function HeadAndNav() {
  return (
    //헤더
    <div>
      <div className="p-5 bg-primary text-white text-center">
        <h1>My First Bootstrap 5 Page</h1>
        <p>Resize this responsive page to see the effect!</p>
      </div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to = {'/'} className={"nav-link active"}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to={'/Board'} className={"nav-link"}>Board</Link>
            </li>
            <li className="nav-item">
              <Link to={'/About'} className={"nav-link"}>About</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet/>
    </div>
  );
}

export default HeadAndNav;


