import React from 'react';
import App from './App';
import A from './containers/Home';
import B from './containers/Translation';
import NotFind from './containers/NotFind';

export default [{
  path: '/',
  component: App,
  loadData: App.loadData,
  routes: [
    {
      path: '/a',
      component: A,
      exact: true,
      loadData: A.loadData,
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
