import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDF9VYm_1fkbqbHFcjBUIQHTFi6504uDu8",
    authDomain: "letschat-3aaed.firebaseapp.com",
    databaseURL: "https://letschat-3aaed.firebaseio.com",
    projectId: "letschat-3aaed",
    storageBucket: "letschat-3aaed.appspot.com",
    messagingSenderId: "939151981837",
    appId: "1:939151981837:web:07e060ddc6892186088444"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;