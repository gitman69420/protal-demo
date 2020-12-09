import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect}  from "react-router-dom";
import MyProfilePage from "./components/MyProfilePage";
import ExplorePage from "./components/ExplorePage";
import LandingPage from "./components/LandingPage";

import "./style.css";

function App() {
  return (
      <div style={{ height: "100%", width: "100%" }}>
        <Router>
          <Switch>
            <Route path="/myprofile" component={MyProfilePage}/>
            <Route path="/explore" component={ExplorePage}/>
            <Route path="/login" component={LandingPage}/>
            <Redirect exact to="/login"/>
          </Switch>
        </Router>  
      </div>
  );
}

export default App;
