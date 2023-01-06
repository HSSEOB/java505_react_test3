import React from "react";
import {Link} from "react-router-dom";

function Links(){
  return(
    <div>
      <h3 className="mt-4">Some Links</h3>
      <p>Lorem ipsum dolor sit ame.</p>
      <ul className="nav nav-pills flex-column">
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
      <hr className="d-sm-none"/>
    </div>
  );
}

export default Links;