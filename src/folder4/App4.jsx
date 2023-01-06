import React, {useContext} from "react";

const ThemeContext = React.createContext('light');
const UserConstext = React.createContext({
  name: 'Guest',
});

function Layout(props){
  return(
    <div>
      <SideBar/>
      <Content/>
    </div>
  )
}

function SideBar(props){
  return<h1>사이드 바</h1>
}

function Content(props){
  return(
    <div>
      <Profile/>
    </div>
  )
}

function Profile(props){
  const theme = useContext(ThemeContext);
  const user = useContext(UserConstext);
  return(
    <div>
      <h3> user : {user.name}</h3>
      <h3> theme : {theme}</h3>
    </div>
  )
}

function App4(props){
  const{signedInUser, theme} = {signedInUser: {name:'아이유'}, theme : 'dark'};

  return(
    <ThemeContext.Provider value={"blue"}>
      <UserConstext.Provider value={{name: "아이유"}}>
        <Layout/>
      </UserConstext.Provider>
    </ThemeContext.Provider>
  )
}

export default App4