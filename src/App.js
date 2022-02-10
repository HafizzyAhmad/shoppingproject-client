import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

//setting routing di App.js untuk manage multiple pages
const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
    </Switch>
    // <div className="App">
    //   <p>this is a test</p>
    // </div>
  );
}

export default App;
