import { Link } from "react-router-dom";
import React from "react"
import { GlobalCtx } from "../App"

function Header(props) {
  const { gState, setGState } = React.useContext(GlobalCtx)


  //Conditional Left Side of NavBar
  const navMe = (
    <>
      <li className={"nav-item"}><Link to="" className={"nav-link"}><i className={"bi-pen"}></i></Link></li>
      <li className={"nav-item"}><Link to="" className={"nav-link"}><i className={"bi-people-fill"}></i></Link></li>
    </>
  )

  //Logout Callback
  const logout = () => {
    window.localStorage.removeItem("token")
    setGState({ ...gState, token: null })
  }

  //Conditional Right Side of NavBar
  const userLogout = (
    <>
      <li className={"nav-item"}><Link className={"nav-link"}><i className={"bi-person-check-fill"}></i></Link></li>
      <li onClick={logout} className={"nav-item"}><Link className={"nav-link"}><i className={"bi-x-circle"}></i></Link></li>
    </>
  )

  const userLogin = (
    <>
      <li className={"nav-item"}><Link to="/signup" className={"nav-link"}><i className={"bi-plus-circle"}></i></Link></li>
      <li className={"nav-item"}><Link to="/login" className={"nav-link"}><i className={"bi-arrow-up-right-circle"}></i></Link ></li>
    </>
  )

  return (
    <nav className={"navbar navbar-expand-sm bg-dark navbar-dark fixed-top"}>
      <div className={"container-fluid"}>
        {/* <div className={"navbar-header"}> */}
        <ul className={"navbar-nav"}>
          <li className={"nav-item"}><Link to="/" className={"nav-link active"}><i className={"bi-house-fill"}></i></Link></li>
          {gState.token ? navMe: null}
        </ul>
        <ul className="navbar-nav navbar-right">
          {gState.token ? userLogout : userLogin}
        </ul>
      </div>
    </nav>
  );
}

export default Header;