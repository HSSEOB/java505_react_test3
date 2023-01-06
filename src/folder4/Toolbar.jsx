import React from "react";
import ThemedButton from "./ThemedButton";

function Toolbar(props){
 return(
   <div>
     {/*자식 컴포넌트로 thema라는 이름의 데이터를 전달 */}
     <ThemedButton thema = {props.thema}/>
   </div>
 )
}

export default Toolbar;