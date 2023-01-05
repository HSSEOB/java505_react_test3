import React,{useState} from "react";
import Child2 from "./Child2";

// Child2 컴포넌트는 부모컴포넌트에서 전달받은 2개의 키가 존재함
//props에 value, childValue 키를 전달 받았고, 해당 키에 1:1로 매칭된 데이터가 존재함
// value: '부모데이터', childValue: 함수가 들어있음
function Parents2(props){
  // childData를 state로 설정
  const [childData, setChildData] = useState('');
  return (
    <div>
      <h1>Parents2 컴포넌트 영역</h1>
      {/*자식 컴포넌트 호출*/}
      {/*자식 컴포넌트 호출 시 value, childValue 라는 키에 데이터를 저장하여 전달*/}
      {/*childValue 키에 setState() 함수를 저장해 전달*/}
      <Child2 value={'부모 데이터'} childValue={setChildData}/>

      {/*현제 state 중 childData 변수를 화면에 출력*/}
      <h3>Child2 컴포넌트에서 전달 받은 데이터 : {childData}</h3>
    </div>
  )
}
export default Parents2;