import React from "react";
import Goal from "./Goal";
import Greeting from "./Greeting";
import LoginControl from "./LoginControl";
import MailBox from "./MailBox";
import Counter from "./Counter";
import UserState from "./UserState";
import MainPage from "./MainPage";
import LandingPage from "./LandingPage";
import AttendanceBook from "./AttendanceBook";
import NameForm from "./NameForm";
import RequestForm from "./RequestForm";
import FruitSelect from "./FruitSelect";
import Reservation from "./Reservation";
import Parents from "./Parents";
import Parents2 from "./Parents2";


function App7() {
  return (
    <div className={"container mt-5"}>
      <Goal isGoal={false}/>
      <hr/>
      <Greeting isLoggedIn={false}/>
      <hr/>
      <LoginControl/>
      <hr/>
      <MailBox unreadMessages={0}/>
      {/*<Counter/>*/}
      <hr/>
      <MainPage/>
      <hr/>
      <LandingPage/>
      <hr/>
      <AttendanceBook/>
      <hr/>
      <NameForm/>
      <hr/>
      <RequestForm/>
      <hr/>
      <FruitSelect/>
      <hr/>
      <Reservation/>
      <hr/>
      <Parents/>
      <hr/>
      <Parents2/>


    </div>
  );
}

export default App7;