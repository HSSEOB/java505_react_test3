import React from "react";

function NavBar(){
  return(
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" href="src/folder0/NavBar#">Active</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="src/folder0/NavBar#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="src/folder0/NavBar#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="src/folder0/NavBar#">Disabled</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;