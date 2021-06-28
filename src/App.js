import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Detail from './component/Detail/Detail';
import List from './component/List/List';
import Main from './component/Main/Main';
import Register from './component/Register/Register';
import './App.scss';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/rooms">
          <List />
        </Route>
        <Route exact path="/room/register">
          <Register />
        </Route>
        <Route path="/room/:pk">
          <Detail />
        </Route>
      </Switch>  
    </div>
  );
}

export default App;
