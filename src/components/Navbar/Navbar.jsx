import React from "react";
import { Link} from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className='.Navbar-Container'>
      <div className="Nav-links">
        <Link to='/Home' >Jobs</Link>
        <Link to='/CompanyPage' >Companies</Link>
        <Link to='/SubscriptionPage' >Services</Link>
        <Link to='/JobsPage'>Resources</Link>
        <button className="Login" href="/">Login</button>
        <button className="Register" href="/">Register</button>
      </div>
    </div>
  );
}
