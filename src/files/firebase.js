import firebase from "firebase";
import {
  initializeApp
} from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyDNKxk0pyIhWy9ggIFtPq--DnVbS5pZHNo",
  authDomain: "login-2b364.firebaseapp.com",
  projectId: "login-2b364",
  storageBucket: "login-2b364.appspot.com",
  messagingSenderId: "926889793028",
  appId: "1:926889793028:web:31d36543b227d6f07b8751"
};
// Initialize Firebase
var fire = firebase.initializeApp(firebaseConfig);

export default fire;