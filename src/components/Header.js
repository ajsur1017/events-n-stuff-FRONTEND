import React from "react"
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { GlobalCtx } from "../App"

function Header(props) {
  const { gState, setGState } = React.useContext(GlobalCtx)

  const colorNavItem = "rgb(102, 51, 153)";
  const colorNavBar = "rgba(232, 232, 232, 0.80)";

  //If User Logged In:
  const yesUser = (
    <>
      <Link to="/myevents" style={{ textDecoration: "none"}}>
      <Nav.Item  className={"nav-link"} style={{ color: `${colorNavItem}` }}><i className={"bi-people-fill"}> {gState.username}</i></Nav.Item></Link>
      <Nav.Link className={"nav-link"}>
        <i className={"bi-x-circle"} style={{ color: `${colorNavItem}` }} onClick={() => {
          window.localStorage.removeItem("token")
          window.localStorage.removeItem("username")
          setGState({ ...gState, token: null, username: null})
        }}></i>
      </Nav.Link>
    </>
  )

  const yesCreate = (
    <Link to="/createvent">
    <Nav.Item style={{ color: `${colorNavItem}` }}><i className={"bi-vector-pen"} style={{ color: `${colorNavItem}` }}></i></Nav.Item></Link>
  )

  //If User Logged Out
  const noUser = (
    <><Link to="/signup">
      <Nav.Item style={{ color: `${colorNavItem}` }}><i className={"bi-plus-circle"} style={{ color: `${colorNavItem}` }}></i>
      </Nav.Item></Link>
      <Link to="/login">
      <Nav.Item style={{ color: `${colorNavItem}` }}><i className={"bi-arrow-up-right-circle"} style={{ color: `${colorNavItem}`, marginLeft: "0.75em"}}></i>
      </Nav.Item></Link>
    </>
  )

  return (
    <Navbar style={{ backgroundColor: `${colorNavBar}` }}>
      <Container>
        <Navbar.Brand href="#home" className="justify-content-start" ><Link to="/" style={{ color: `${colorNavItem}` }}><i className={"bi-house-fill"}></i></Link></Navbar.Brand>
        <Nav className={"me-auto"}>
          {gState.token ? yesCreate : null}
        </Nav>
        <Nav className="justify-content-end" activeKey="/home">
          {gState.token ? yesUser : noUser}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;