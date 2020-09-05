import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Signin from './components/Login/Signin';
import Signup from './components/Login/Signup';
function App() {
  return (
    <div className="App">
        
        <Router>
        <Header />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/signin" component={Signin}></Route>
            <Route path="/signup" component={Signup}></Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
