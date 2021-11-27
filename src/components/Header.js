import { Link } from "react-router-dom";
import React from "react"
import { GlobalCtx } from "../App"

function Header(props) {
  const { gState, setGState } = React.useContext(GlobalCtx)

  const logout = (
    <Link>
      <div className="logout" onClick={() => {
        window.localStorage.removeItem("token")
        window.localStorage.removeItem("username")
        setGState({ ...gState, token: null, username: null})
      }}>Logout</div>
    </Link>)

  const login = (
    <>
      <Link to="/login">
        <div className="login">Login</div>
      </Link>
      <Link to="/signup">
        <div className="signup">Sign Up</div>
      </Link>
    </>)

  return (
    <nav className="nav">
      <Link to="/">
        <div className="title">Events n' Stuff</div>
      </Link>
      <div className="headerLinks">
        {gState.token ? logout : login}
      </div>
    </nav>
  );
}

export default Header;