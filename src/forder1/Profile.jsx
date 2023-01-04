import React from "react";

//기본적인 프로퍼티사용
// function Profile(props){

//잡다구리한 프로퍼티 사용법
//   let data = props;
//   let userId = props.userId;
//   let userName = props.userName;
//   let userTel = props.userTel;
//   let userEmail = props.userEmail;

  //확장 표현식 : 대입 연산자 오른쪽의 데이터를 연산자 왼쪽의 변수에 저장시 [] {} 에 표시된 이름에 대입
  function Profile({userId, userName, userTel, userEmail}){

    return(
    <div className={"border rounded-3 px-3 m-4"}>
      <div className={"my-3"}>
        <label for={"user-id"} className={"form-label"}/>아이디 :
        <input type={"text"} id={"user-id"} className={"form-control"} value={userId}/>
      </div>

      <div className={"my-3"}>
        <label for={"user-name"} className={"form-label"}/>이름 :
        <input type={"text"} id={"user-name"} className={"form-control"} value={userName}/>
      </div>

      <div className={"my-3"}>
        <label for={"user-tel"} className={"form-label"}/>전화번호 :
        <input type={"tel"} id={"user-tel"} className={"form-control"} value={userTel}/>
      </div>

      <div className={"my-3"}>
        <label for={"user-email"} className={"form-label"}/>이메일 :
        <input type={"email"} id={"user-email"} className={"form-control"} value={userEmail}/>
      </div>
    </div>
  );
}

export default Profile;