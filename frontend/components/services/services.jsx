import React from "react";
import { Link } from "react-router-dom";

class Services extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="services-container">
        <header className="header darken-overlay">
          <p>SERVICES</p>
        </header>
        <main>
          <section>
            <div>
              <p>We Specialize In:</p>
              <ul>
                <li>Male and Female Haircut</li>
                <li>Perms</li>
                <li>Shaves</li>
                <li>Beard Trims</li>
              </ul>
            </div>
            <span className="services-photo-one"></span>
          </section>
          <section>
            <div>
              <p>Our Color Services Include:</p>
              <ul>
                <li>Hair Coloring</li>
                <li>Highlights</li>
                <li>Grey Coverage</li>
              </ul>
            </div>
            <span className="services-photo-two"></span>
          </section>
        </main>
      </div>
    )
  }
}

export default Services;
