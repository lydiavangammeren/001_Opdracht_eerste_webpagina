import React from "react";
import "./App.css";
import Home from "../views/Home";
import DashBoard from "../views/DashBoard";
import Studentpage from "../views/Studentpage";
import About from "../views/About";
import Nav from "../views/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import studentdata from "../utils/studentdata";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { students: studentdata };
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
            <Route path="/about" component={About} />
            <Route path="/dashboard">
              <DashBoard data={this.state.students}></DashBoard>
            </Route>
            <Route path="/studentpage">
              <Studentpage data={this.state.students}></Studentpage>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
