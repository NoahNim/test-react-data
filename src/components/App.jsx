import React from 'react';
import Content from './Content.jsx';
import Home from './Home.jsx';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/list' component={Content} />
      </Switch>
    </div>
  );
}

export default App;
