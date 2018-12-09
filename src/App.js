import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";


import Home from './components/Routs/Home/Home'
import About from './components/Routs/About/About'
import Project from './components/Routs/Project/Project';


class App extends Component {

  componentDidUpdate() {
      window.scrollTo(0, 0);
  }

  render() {

    let routes = (
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/" exact component={Home} />
        <Route path="/:projectName" component={Project} />
        <Redirect to="/" />
      </Switch>
    );

    return (
      <>
          {routes}
      </>    
    );
  }
}

export default App;

