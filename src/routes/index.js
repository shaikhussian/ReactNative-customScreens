import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import NotFound from './NotFound';
import Splash from './Splash';
import Register from './Register';
import Login from './Login';
import Payment from './Payment';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route path="/signUp" component={Register} />
          <Route path="/signin" component={Login} />
          <Route path="/payment" component={Payment}/>
        <Route component={NotFound} />
      </Switch>
    );
  }
}
