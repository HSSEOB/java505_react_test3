// Contents.jsx
import React from "react";

function Contents(){
  const styles = {
    fakeImg:{
      height : 200,
      backgroundColor: "#aaa",
    },
  }
  return(
    <div>
      <h2>TITLE HEADING</h2>
      <h5>Title description, Dec 7, 2020</h5>
      <div style={styles.fakeImg}>Fake Image</div>
      <p>Some text..</p>
      <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco.</p>
    </div>
  )
}
export default Contents;