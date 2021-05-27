import firebase from 'firebase'

import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCFL1Lv1e-eXC5UuprUEqanWeBFZ6jjMg4",
    authDomain: "minha-floresta-app2.firebaseapp.com",
    projectId: "minha-floresta-app2",
    storageBucket: "minha-floresta-app2.appspot.com",
    messagingSenderId: "151333538945",
    appId: "1:151333538945:web:2e685d4bfceb6d3f905180"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export default{
      firebase,
      db,
  }