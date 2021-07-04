import React from 'react'
import { Route, Switch, useHistory } from 'react-router-dom';
import Detail from './component/Detail/Detail';
import List from './component/List/List';
import Main from './component/Main/Main';
import Register from './component/Register/Register';
import './App.scss';

function App() {

  let history = useHistory();

  return (
    <div className="App">
      <nav>
        <div className="nav_title" onClick={() => {
          history.push('/')
        }}><i class="fas fa-house-user"></i>방방</div>
        <div className="nav_content">
          <p onClick={() => {
            history.push('/room/register')
          }}>방올리기</p>
          <p onClick={() => {
            history.push('/rooms')
          }}>매물</p>
        </div>
      </nav>
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
