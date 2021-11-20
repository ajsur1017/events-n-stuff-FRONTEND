import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav className="nav">
      <Link to="/">
      <div className="title">Events n' Stuff</div>
        </Link>
        <div className="headerLinks">
        <Link to="/auth/login">
        <div className="login">Login</div>
        </Link>
        <Link to="/auth/signup">
        <div className="signup">Sign Up</div>
        </Link>
        </div>

    </nav>
  );
}

export default Header;