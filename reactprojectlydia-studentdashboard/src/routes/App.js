import React from "react";
import "./App.css";
import Dashboard from "../views/DashBoard";
import About from "../views/About";
import Nav from "../views/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./studentcomputer.png";

const Home = () => (
  <div>
    <h1>Home</h1>
    <img src={logo} alt="studentwithcomputer" />
  </div>
);

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
