import React from 'react';
import { Route, Redirect, Switch} from 'react-router-dom';
import Navbar from "./navbar/navbar";
import Splash from "./splash/splash";
import About from "./about/about";
import Services from "./services/services";
import Footer from "./footer/footer";

const App = () => (
  <div>
    <Navbar />
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/" component={Splash} />
      <Redirect to="/" />
    </Switch>
    <Footer />
  </div>
);

export default App;
