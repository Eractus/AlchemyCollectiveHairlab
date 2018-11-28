import React from "react";
import { Link } from "react-router-dom";

class Splash extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main className="splash-container">
        <section className="splash-photostream">
          <span></span>
          <div className="splash-photostream-images">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </section>
        <section className="splash-about-us">
          <article>
            <div className="splash-about-us-text">
              <p>What Inspires Us</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <span></span>
          </article>
          <Link className="splash-button" to="/about"><button>Learn More</button></Link>
        </section>
        <section className="splash-services">
          <p>What We Specialize In</p>
          <Link className="splash-button" to="/services"><button>Our Services</button></Link>
        </section>
        <section className="splash-gallery">
          <p>Take a Glimpse Inside Our Lab</p>
          <Link className="splash-button" to="/gallery"><button>See All</button></Link>
        </section>
        <section className="splash-appointments">
          <p>Book Online Today!</p>
          <button>Coming Soon</button>
        </section>
        <section className="splash-reviews">
          <p>Here's What Our Customers Have to Say</p>
          <Link className="splash-button" to="/reviews"><button>All Reviews</button></Link>
        </section>
      </main>
    )
  }
}

export default Splash;
