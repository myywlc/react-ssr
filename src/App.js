import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';

const App = ({ staticContext, route }) => (
  <div>
    <Header staticContext={staticContext} />
    {renderRoutes(route.routes)}
  </div>
);

export default App;
