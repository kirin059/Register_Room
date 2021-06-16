import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import './App.scss';
import Detail from './component/Detail/Detail';
import List from './component/List/List';
import Main from './component/Main/Main';
import Register from './component/Register/Register';

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
          {/* 방 등록 페이지 */}
          <Register />
        </Route>

        <Route path="/room/:pk">
          {/* 방 상세 페이지 */}
          <Detail />
        </Route>
          
        {/* <Route path="/:id"> 
          <div>잘못된 경로입니다. <Link to="/">메인페이지 이동</Link></div>
        </Route> */}

      </Switch>
      
    </div>
  );
}

export default App;
