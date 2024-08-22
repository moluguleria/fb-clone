import React, { useState } from 'react';
import "./Login.css";
import { Button } from '@mui/material';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "./firebase";
import { actionTypes } from './Reducer';
import { useStateValue } from './StateProvider';

function Login() {
    const [state,dispatch] =useStateValue();
    const auth = getAuth(); // Get an instance of the Auth class

  const signIn = () => {
    signInWithPopup(auth, provider).then(result => {
        dispatch({
            type: actionTypes.SET_USER,
            user:result.user,

        })
    })
    .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjvzC_QRv6moAhgNb5C6e3yicKgFND1g2RwA&s" alt="facebook" />
        <img src="https://download.logo.wine/logo/Facebook/Facebook-Logo.wine.png" alt="facebook-Text" />
      </div>
      <Button type="Submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  )
}

export default Login;