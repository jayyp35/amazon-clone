import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBdcnYsVaqproHztAieLZjJbwibIET5ZPE",
    authDomain: "clone-7a3af.firebaseapp.com",
    projectId: "clone-7a3af",
    storageBucket: "clone-7a3af.appspot.com",
    messagingSenderId: "556704965607",
    appId: "1:556704965607:web:0b784bd07401fd0d055342",
    measurementId: "G-PP0FD6PGFG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};