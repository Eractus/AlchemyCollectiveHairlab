import React from 'react';
import { Route, Redirect, Switch} from 'react-router-dom';
import Navbar from "./navbar/navbar";
import Splash from "./splash/splash";
import Footer from "./footer/footer";

const App = () => (
  <div>
    <Navbar />
    <Splash />
    <Footer />
  </div>
);

export default App;
