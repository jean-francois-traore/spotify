import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {Navigation, Genres, Albums, Acceuil, Artistes} from './components';


function App() {
  return (
    <div className="App">
      <div className='Nav-bar'>
        <Navigation />
      </div>
      <div className="main-content">
        <div className='content'>
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
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
