import React from "react";

function Links(){
  return(
    <div>
      <h3 className="mt-4">Some Links</h3>
      <p>Lorem ipsum dolor sit ame.</p>
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          <a className="nav-link active" href="src/folder0/Links#">Active</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="src/folder0/Links#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="src/folder0/Links#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="src/folder0/Links#">Disabled</a>
        </li>
      </ul>
      <hr className="d-sm-none"/>
    </div>
  );
}

export default Links;