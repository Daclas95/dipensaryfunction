import React from "react";
import Navbar from "../component/organisms/navbar/Navbar";
import Body from "../component/templates/body/Body";
import Home from "./../pages/home/Home";

import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      { <Navbar /> }
      <Route exact path="/" component={Home} />
      <Switch>
        <Body />
      </Switch>
    </>
  );
}

export default App;
