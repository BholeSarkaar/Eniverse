import React,{useEffect} from 'react';
import './App.css';
import {Route,Switch,BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Signin from './components/Login/Signin';
import Signup from './components/Login/Signup';
import PrivateRoute from './components/HOC/PrivateRoute';
import {isUserLoggedIn} from './actions/authActions';
import {useDispatch,useSelector} from 'react-redux';
function App() {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if(!auth.authenticate){
        dispatch(isUserLoggedIn());
    }
},[]);
  return (
    <div className="App">
        <Router>
        <Header />
          <Switch>
            <PrivateRoute path="/" exact component={Home}></PrivateRoute>
            <Route path="/signin" component={Signin}></Route>
            <Route path="/signup" component={Signup}></Route>
          </Switch>
          </Router>
    </div>
  );
}

export default App;
