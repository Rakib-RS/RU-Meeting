import React,{Component} from 'react';

//import './App.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {signup,signin} from '../pages/index';
import { Provider }  from 'react-redux';
import store from '../store'
//import Login from '../components/login.component'


class App extends Component {
  render(){
  return (
    <Provider store={store}>
  <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>RU_Meeting</Link>
          
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/sign-in">Login</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
      
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
        <Switch>
            <Route  path='/' exact component={signin} />
            <Route path="/sign-in" exact component={signin} />
            <Route path="/sign-up" exact component={signup} />
          </Switch>
        </div>
      </div>
    </div></Router>
    </Provider>
  );
  }
}


export default App;