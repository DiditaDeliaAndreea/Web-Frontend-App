// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxxxQnxp3FXaCk4tnyczT1pvIHat5Pyc8",
  authDomain: "giphyapp-95947.firebaseapp.com",
  projectId: "giphyapp-95947",
  storageBucket: "giphyapp-95947.appspot.com",
  messagingSenderId: "768386514872",
  appId: "1:768386514872:web:9fe2895a7aecfec0c5994d",
  measurementId: "G-HFEMKZ7BGC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);