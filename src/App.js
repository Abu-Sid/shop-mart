import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import SingleProduct from './components/SingleProduct/SingleProduct';
export const UserContext= createContext();
function App() {
  const [loggedUser,setLoggedUser]=useState({})
  return (
    <div className="app">
    <UserContext.Provider value={[loggedUser, setLoggedUser]}>
      <Router>
        <ToastContainer
        position='bottom-left'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
      <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/login" >
            <Login/>
          </Route>
          <PrivateRoute path="/order">
            <Cart/>
          </PrivateRoute>
          <PrivateRoute path="/product/:id">
            <SingleProduct/>
          </PrivateRoute>
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
