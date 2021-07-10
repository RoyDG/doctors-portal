import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import loginBg from '../../../images/loginBg.png'

//this is used cause firebase initialized twice
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const Login = () => {

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                // const signedInUser = { name: displayName, email }
                // setLoggedInUser(signedInUser);
                // storeAuthToken();
                })
                .catch((error) => {   
                const errorMessage = error.message;
                console.log(errorMessage);
                });
            }   
            
    return (
    <div className="login-page container">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6 shadow p-5">
          <div className="form-group">
            <label htmlFor="" className="mb-3">User Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="" className=" mb-3 mt-3">Password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="" className="text-danger mt-2">Forgot your password?</label>
          </div>
          <div className="from-group mt-5">
            <button className="btn btn-info me-3">Sign in</button>
            <button type="button" class="btn btn-link text-secondary"  onClick={handleGoogleSignIn} >Sign in with Google</button>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-block align-self-end">
          <img className="img-fluid" src={loginBg} alt="" />
        </div>
      </div>
    </div>
    );
};

export default Login;