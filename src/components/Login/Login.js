import { Button } from "@material-ui/core";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import React, { useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import Logo from "../../assets/Images/logo.jpeg";
import firebaseConfig from "./firebase.config";
import "./Login.css";
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}


const Login = () => {
    const [loggedUser, setLoggedUser] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const googleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        const { displayName, email, photoURL } = user;
        const userInfo = {
          email: email,
          displayName: displayName,
          photo: photoURL,
        };
        setLoggedUser(userInfo);
        history.replace(from);
      })
      .catch((err) => {
        console.log(err);
      });
  };
    return (
        <div>
      <div style={{ textAlign: "center" }} className="">
        <Link to="/">
          <img style={{ width: "50%" }} src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="googlelogin">
        <Button variant="contained" size="large" color="primary"  onClick={googleLogin}>SignIn With Google</Button>
      </div>
    </div>
    );
};

export default Login;