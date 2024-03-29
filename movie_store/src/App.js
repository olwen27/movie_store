import React from 'react';
import './App.css';
import Movies from './components/movies'
import {Route,Switch} from 'react-router-dom'
import Nav from './components/Nav'
import Genre from './components/Genre'
import Show from './components/show';
import Context from './components/context' 
import AddMovie from './components/addmovie';


function App() {
  return (
    <div className="App">
    <Context>
      <Nav/>
      <Switch>
      <Route path="/form" component={Show}/>
      <Route path="/addmovie" component={AddMovie}/>
      </Switch>

    </Context>
    </div>
  );
}

export default App;
