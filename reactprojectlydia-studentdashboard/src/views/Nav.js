import React from "react";
import { Link } from "react-router-dom";
class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <Link to="/">
              <li key={"home"} className="navlink">
                Home
              </li>
            </Link>
            <Link to="/dashboard">
              <li key={"dashboard"} className="navlink">
                Student Dashboard
              </li>
            </Link>
            <Link to="/about">
              <li key={"about"} className="navlink">
                About me
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
