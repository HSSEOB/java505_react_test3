import React from "react";

function Child2(props){

  // 부모 컴포넌트에서 props를 통해 전달받은 함수를 실행
  // 부모컴포넌트에서 전달받은 함수가 부모의 state를 수정 할 수 있는 setstate() 함수임
  // value : '부모데이터' childValue : setValue() 함수가 들어 있음
  const sendData= () => {
    props.childValue('자식데이터');
  }

  return(
    <div>
      <h3>Child2 컴포넌트 영역</h3>
      {/*부모 컴포넌트에서 props를 통해 전달받은 데이터 출력*/}
      <p>부모 컴포넌트에서 전달받은 데이터 : {props.value}</p>
      {/*버튼 클릭 시 지정한 함수 실행*/}
      <button onClick={sendData} className={'btn btn-info'}>클릭 시 데이터 전송</button>
    </div>
  )
}

export default Child2;