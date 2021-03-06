import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '@/pages/about';
import Home from '@/pages/home';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path={['/', '/home']} component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
