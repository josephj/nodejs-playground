import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Layout from './modules/Layout'
import Home from './modules/Home'

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home}/>
  </Route>
);
