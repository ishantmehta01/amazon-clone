import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCZDP_AmWbCkpzRYQdEOU0mLAqN3RZ2Trg",
    authDomain: "clone-9f46a.firebaseapp.com",
    databaseURL: "https://clone-9f46a.firebaseio.com",
    projectId: "clone-9f46a",
    storageBucket: "clone-9f46a.appspot.com",
    messagingSenderId: "304438355000",
    appId: "1:304438355000:web:8f3c18061e328115c532cd",
    measurementId: "G-3JZG69Z2X5"
  };

firebase.initializeApp(firebaseConfig);
// const firebaseApp = firebase.initializeApp(firebaseConfig);
//   const db = firebaseApp.firestore();
export const auth = firebase.auth();

// export default { auth }