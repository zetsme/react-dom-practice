import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Post from './components/Post';
import Posts from './components/Posts';
import Todo from './components/Todo';
import Todos from './components/Todos';
import User from './components/User';
import Users from './components/Users';

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/users/:id' component={User} />
        <Route path='/users'>
          <Users />
        </Route>
        <Route path='/posts/:id' component={Post} />
        <Route path='/posts'>
          <Posts />
        </Route>
        <Route path='/todos/:id' component={Todo} />
        <Route path='/todos'>
          <Todos />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
