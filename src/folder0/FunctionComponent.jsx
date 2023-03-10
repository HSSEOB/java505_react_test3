// FunctionComponent.jsx

//1. 모든 component는 React를 import해서 사용
//2. 클래스 컴포넌트는 그냥 함수 생성
//3. 함수 컴포넌트는 export default로 설정
//4. 클래스 컴포넌트에는 render에서 jsx 문법을 사용함
//5. state 변경 및 생명주기에 관련된 함수를 사용하기 위해서 hooks를 사용함


import React, {useState} from "react";


function FunctionComponent(props){
  return(
    <div>
      <p>함수 컴포넌트 사용</p>
    </div>
  )
}

export default FunctionComponent;

