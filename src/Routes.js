import React from 'react'
import App from './App'
import A from './pages/A'
import B from './pages/B'
import NotFind from './pages/NotFind'

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
