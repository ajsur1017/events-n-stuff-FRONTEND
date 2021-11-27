import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { Route, Link, Switch } from "react-router-dom"
import Signup from "./pages/Signup"
import Login from "./pages/Login"

export const GlobalCtx = React.createContext(null)

function App() {

  const [gState, setGState] = React.useState({ url: "https://events-n-stuff.herokuapp.com", token: null })

  //SEEING IF ALREADY LOGED IN
  React.useEffect(() => {
    const token = JSON.parse(window.localStorage.getItem("token"))
    console.log(token)
    if (token) {
      setGState({ ...gState, token: token.token })
    }
  }, [])

  return (
    <GlobalCtx.Provider value={{ gState, setGState }}>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" render={(rp => gState.token ? <h1>Welcome!</h1> : <h1>Signup or Login to get started!</h1>)} />
            <Route path="/signup" render={(rp => <Signup {...rp} />)} />
            <Route path="/login" render={(rp => <Login {...rp} />)} />
            {/* <Route path="/dashboard" render={(rp => <h1>Dashboard</h1>)} /> */}
          </Switch>
        </main>
        <Main user={gState.token} />
      </div>
    </GlobalCtx.Provider>
  );
}

export default App;
