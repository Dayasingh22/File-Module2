import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewFile from "./components/Flow-Chart/New-File/index";
import ExistingFile from "./components/Flow-Chart/Existing-File/index";
import CreateNewNode from "./components/New-Node/create-node";
import NewNode from "./components/New-Node/index";
import Layout from "./Layout";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Layout}></Route>
          <Route exact path="/flow-chart" component={NewFile}></Route>
          <Route exact path="/edit" component={ExistingFile}></Route>
          <Route exact path="/new-node" component={NewNode}></Route>
          <Route exact path="/create-node" component={CreateNewNode}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
