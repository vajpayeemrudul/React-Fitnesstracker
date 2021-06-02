import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import FitnessTracker from './components/FitnessTracker/FitnessTracker';
import MainPage from './components/MainPage/MainPage';
import Overview from './components/Overview/Overview'

import './App.css';

function App() {
  return (
    <div>
      <Switch>
       <Route exact path ="/">
         <FitnessTracker/>
       </Route>
       <Route exact path ="/mainpage">
         <MainPage/>
       </Route>
       <Route exact path ="/overview">
         <Overview/>
       </Route>
       <Redirect to="/"/>
     </Switch>
    </div>
  );
}

export default App;
