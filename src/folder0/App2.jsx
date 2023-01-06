// App2.jsx

import React from "react";
import Contents from "./Contents";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./NavBar";
import Info from "./Info";
import Links from "./Links";

const styles = {
  fakeImg:{
    height : 200,
    backgroundColor: "#aaa",
  },
}

function App2(){
  return(
    <div>
      <Header/>
      <Navbar/>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-4">
            <Info/>
            <Links/>
          </div>
          <div className="col-sm-8" >
          <Contents/>
            <br/>
          <Contents/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App2;