import React from "react";

const styles = {
  bg:{
    backgroundColor : "blue",
  },
  mg:{
    marginLeft:30
  }
}

function Button(props){
  // 부모에서 전달 받은 thema를 사용하고 있음

  if(props.thema =='dark'){
    styles.bg.backgroundColor= "green";
  }
  else {
    styles.bg.backgroundColor="blue"
  }

  return <button style = {styles.bg}> 테마 적용 버튼</button>
}

function ThemedButton(props) {
  return <Button thema={props.theme}/>
}

export default ThemedButton;

