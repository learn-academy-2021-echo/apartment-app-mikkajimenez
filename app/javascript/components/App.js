import React from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import LearnMore from "./pages/LearnMore";
import Home from "./pages/Home";
import { Nav, NavItem } from "reactstrap";
import Header from "./components/Header";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <h1>Hello Apartment App!</h1>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutUs} />
          <Route path="/learn" component={LearnMore} />
        </Switch>
      </Router>
    );
  }
}

export default App;
