// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
	apiKey: "AIzaSyCzKWPe4AQdauVd0M_AN-Ke45nuGF26rBo",
	authDomain: "linked-clo.firebaseapp.com",
	projectId: "linked-clo",
	storageBucket: "linked-clo.appspot.com",
	messagingSenderId: "759289082931",
	appId: "1:759289082931:web:0efea98bcd817b167b5f46",
	measurementId: "G-J1BVCKH1S7"
  };
  

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
const auth = firebase.auth();

export { db, auth };
