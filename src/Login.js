import React, { useState } from "react";
import "./Login.css";
import LoginImage from "./assets/pngwing.com (2).png";
import {auth} from './firebase'
import { useDispatch } from "react-redux";
import {login} from './features/userSlice'
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const register = () => {
	   if(!name){
		   alert('please enter full name')
	   }
	  auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
		      userAuth.user.updateProfile({
				  displayName:name,
				  photoURL: profilePic,
			  }).then(() => {
				  dispatch(login({
					 email: userAuth.user.email,
					 uid: userAuth.user.uid,
					 displayName: name,
					 photoURL: profilePic,
				  }))
			  })
	  }).catch((err) => alert(err.message))
	   
  };
  const LoginToApp = (e) => {
    e.preventDefault();
	auth.signInWithEmailAndPassword(email,password).then((userAuth) => {
		dispatch(login({
			email: userAuth.user.email,
			uid: userAuth.user.uid,
			displayName: userAuth.user.displayName,
			profileUrl: userAuth.user.photoURL
		}))
	}).catch((err) => alert(err))
  };
  return (
    <div className="login">
      <img src={LoginImage} alt="" />
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name required if registering"
        />
        <input
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile pic URL (optional)"
        />
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
        />

        <button onClick={LoginToApp}>Sign in</button>
        <p>
          Not a member?
          <span onClick={register} className="login__register">
            Register Now
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
