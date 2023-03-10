import React,{useState} from "react";
import Greeting from "./Greeting";
import UserState from "./UserState";


function LoginButton(props){
  return(
    <button onClick={props.onClick}>로그인</button>
  );
}

function LogoutButton(props){
  return(
    <button onClick={props.onClick}>로그아웃</button>
  );
}


function LoginControl(){
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  }

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  }

  //   // 엘리먼트 변수 : 자바스크립트 변수에 리액트 컴포넌트를 저장한것
  let button;

  // 조건부 렌더링을 사용하기 위해서 자바스크립트 변수 button에 리액트 컴포넌트를 저장함
  // state의 상태에 따라서 엘리먼트 변수에 저장될 리액트 컴포넌트를 변경
  if (isLoggedIn){
    button = <LogoutButton onClick = {handleLogoutClick}/>;
  }
  else{
    button = <LoginButton onClick = {handleLoginClick}/>;
  }

  return(
    <div>
      <Greeting isLoggedIn = {isLoggedIn}/>
      {/*엘리먼트 변수에 저장된 리액트 컴포넌트가 출력됨*/}
      {button}
      {
        isLoggedIn ? <LogoutButton onClick={handleLogoutClick}/> : <LoginButton onClick={handleLoginClick()}/>
      }
      <UserState isLoggedIn={isLoggedIn}/>
    </div>
  );
}

export default LoginControl;