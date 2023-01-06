import React from "react";

const ThemeContext = React.createContext('light');

function  Toolbar2(){
  return(
    <ThemeContext.Consumer>
      {value => <ThemedButton2 aaa={value}/>}
    </ThemeContext.Consumer>

    // <div>
    //   <ThemedButton2/>
    // </div>
  )
}

function ThemedButton2(){
  return(
    <ThemeContext.Consumer>
      {value => <Button2 theme={value}/>}
    </ThemeContext.Consumer>
  )
}

function Button2(props){
  return <button>{props.theme}</button>
}

function App2(props){
  return (
    <ThemeContext.Provider value={'dark'}>
      <Toolbar2/>
    </ThemeContext.Provider>
  )
}

export default App2;