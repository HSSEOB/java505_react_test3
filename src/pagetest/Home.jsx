import React from "react";
import Info from "./Info";
import Links from "./Links";
import Contents from "./Contents";
import Footer from "./Footer";

function Home(props) {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-4">
            <Info/>
            <Links/>
          </div>
          <div className="col-sm-8">
            <Contents/>
            <br/>
            <Contents/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home;


