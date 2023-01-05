import React from "react";


function Greeting(props){
  const isLoggedIn = props.isLoggedIn;

  if(isLoggedIn){
  return <UserGreeting/>
  }

  return <GuestGreeting/>
}


function UserGreeting(props){
  return <h1>Ditto</h1>
}

function GuestGreeting(props){
  return <h1>OMG</h1>
}

export default Greeting;