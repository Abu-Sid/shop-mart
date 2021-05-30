import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import SingleProduct from './components/SingleProduct/SingleProduct';

export const UserContext= createContext();
function App() {
  const [loggedUser,setLoggedUser]=useState({})
  return (
    <div className="app">
    <UserContext.Provider value={[loggedUser, setLoggedUser]}>
    <Router>
      <Navbar/>
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/login">
            {/* <Login/> */}
          </Route>
          <Route path="/order">
            {/* <Order/> */}
          </Route>
          <Route path="/product/:id">
            <SingleProduct/>
          </Route>
          <Route path="*">
            <h1 style={{textAlign: "center"}}>page not found</h1>
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
    </div>
  );
}

export default App;
