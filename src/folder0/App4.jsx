// App4.jsx

import React from "react";
import Header1 from "../forder1/Header1";
import Contents from "./Contents";
import {Container} from "react-bootstrap";
function App4(){

  return(
    <div>
      <Header1></Header1>

      <div style={{textAlign: 'center'}}>
      <div className="Container" style={{display: "inline-flex",width:1100, height:900}}>
        <div>
        <img src="/img/2.png" alt="2" style={{width:500}}/>
        </div>
        <div style={{textAlign:"center", marginLeft:50, marginTop:20}}>
        <p style={{fontSize:40}}>About Catering</p>
        <p style={{fontSize:20}}>Tradition since 1889</p>
          <div style={{textAlign:"left"}}>
        <p style={{fontSize:17}}>The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.</p>
        <p style={{fontSize:17, color:"gray"}}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>
      </div>

    </div>
  );
}

export default App4;