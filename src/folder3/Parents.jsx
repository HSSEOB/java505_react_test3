import React,{useState} from "react";
import Child from "./child";

function Parents(){
  return (
    <div>
      <h1>Parents 컴포넌트 영역</h1>
      <Child value={'부모 데이터'}/>
    </div>
  )
}
export default Parents;