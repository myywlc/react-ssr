import React from 'react';
import App from './App';
import A from './containers/A';
import B from './containers/B';
import NotFind from './containers/NotFind';

export default [{
  path: '/',
  component: App,
  routes: [
    {
      path: '/a',
      component: A,
      exact: true,
      key: 'a'
    }, {
      path: '/b',
      component: B,
      loadData: B.loadData,
      exact: true,
      key: 'b'
    }, {
      component: NotFind
    }
  ]
}];
