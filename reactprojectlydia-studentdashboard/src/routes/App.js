import React from "react";
import "./App.css";
import Home from "../views/Home";
import Dashboard from "../views/DashBoard";
import Studentpage from "../views/Studentpage";
import About from "../views/About";
import Nav from "../views/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import studentdata from "../utils/studentdata";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      students: studentdata,
    };
  }
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
            <Route path="/Studentpage/:name" component={Studentpage} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
