import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from './pages/home';
import List from './pages/list';
import Detail from './pages/detail';

const App = (props) => {
  return (
    <div style={{ width: '100%', height: '100%', overflowY: 'hidden' }}>
      <Route path="/home" children={props => <Home {...props}></Home>}></Route>
      <Route path="/list" children={props => <List {...props}></List>}></Route>
      <Route path="/detail" children={props => <Detail {...props}></Detail>}></Route>
      <Redirect from="/" to="/home"></Redirect>
    </div>
  )
};

export default App

