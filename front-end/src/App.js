import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navigation, Genres, Albums, Acceuil, Artistes, Detail_album } from "./components";

function App() {
  return (
    <div className="App">
      <div className="Nav-bar">
        <Navigation />
      </div>
      <div className="main-content">
        <Router>
          <Switch>
            <Route path="/" exact>
              <Acceuil />
            </Route>
            <Route path="/albums" exact>
              <Albums />
            </Route>
            <Route path="/genres" exact>
              <Genres />
            </Route>
            <Route path="/artistes" exact>
              <Artistes />
            </Route>
            <Route path="/detail_album" exact component={Detail_album} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
