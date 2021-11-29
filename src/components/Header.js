import React from "react"
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { GlobalCtx } from "../App"

function Header(props) {
  const { gState, setGState } = React.useContext(GlobalCtx)

  //Conditional Right Side of NavBar

  //If User Logged In:
  const logout = (
    <>
      <Nav.Link href="/myevents" className={"nav-link"} style={{ color: "#382633" }}><i className={"bi-people-fill"}> {gState.username}</i></Nav.Link>
      <Nav.Link className={"nav-link"} style={{ color: "#614258" }}>
        <i className={"bi-x-circle"} style={{ color: "#614258" }} onClick={() => {
          window.localStorage.removeItem("token")
          window.localStorage.removeItem("username")
          setGState({ ...gState, token: null, username: null})
        }}>Logout</i>
      </Nav.Link>
    </>
  )

  //If User Logged Out
  const login = (
    <>
      <Nav.Item>
        <Nav.Link href="/signup" style={{ color: "#382633" }}><i className={"bi-plus-circle"} style={{ color: "#382633" }}></i> Sign Up</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/login" style={{ color: "#382633" }}><i className={"bi-arrow-up-right-circle"} style={{ color: "#382633"}}></i> Login</Nav.Link >
      </Nav.Item>
    </>
  )

  return (
    <Navbar style={{ backgroundColor: "#F2CC8F" }}>
      <Container>
        <Navbar.Brand href="#home" className="justify-content-start" ><Link to="/" style={{ color: "rgb(102, 51, 153)" }}><i className={"bi-house-fill"}></i></Link></Navbar.Brand>
        <Nav className="justify-content-center" activeKey="/home">
          {gState.token ? logout : login}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;