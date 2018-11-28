import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar-container">
        <Link className="navbar-logo" to="/"></Link>
        <ul className="navbar-links">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/services">SERVICES</Link>
          </li>
          <li>
            <Link to="/gallery">GALLERY</Link>
          </li>
          <li>
            <Link to="/">APPOINTMENTS</Link>
          </li>
          <li>
            <Link to="/reviews">REVIEWS</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
        <Link className="navbar-contact-number" to="/contact">
          <p>123-456-7890</p>
        </Link>
      </nav>
    )
  }
}

export default Navbar;
