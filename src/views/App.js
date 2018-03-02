import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LayoutMain from "./Main";
import PageLogin from "./Login";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container-fluid no-gutters">
        <Switch>
          <Route path="/login" component={PageLogin}/>
          <Route path="/" component={LayoutMain}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;