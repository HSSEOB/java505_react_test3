import React from "react";

function Info(){
  const styles = {
    fakeImg:{
      height : 200,
      backgroundColor: "#aaa",
    },
    fakeImg2:{
      height : 270,
      width : 380
    },
  }
  return(
    <div>
    <h2>About Me</h2>
  <h5>Photo of me:</h5>
      <img alt={'newjeans'} src={"img/newjeans.jpg"} style={styles.fakeImg2}/>

  <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
    </div>
  );
}
export default Info
