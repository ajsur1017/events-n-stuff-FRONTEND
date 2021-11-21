import { Link } from "react-router-dom";
import React from "react"
import { GlobalCtx } from "../App"

function Header(props) {
  const { gState, setGState } = React.useContext(GlobalCtx)

  const logout = (
    <Link>
      <div className="logout" onClick={() => {
        window.localStorage.removeItem("token")
        setGState({...gState, token : null})
      }}>Logout</div>
    </Link>)

  return (
    <nav className="nav">
      <Link to="/">
        <div className="title">Events n' Stuff</div>
      </Link>
      <div className="headerLinks">
        <Link to="/login">
          <div className="login">Login</div>
        </Link>
        <Link to="/signup">
          <div className="signup">Sign Up</div>
        </Link>
        {gState.token ? logout : null}
      </div>

    </nav>
  );
}

export default Header;