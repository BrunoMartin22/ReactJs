// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjj7vGMlxXa-cYd8RlrJwhdnt65GRDI4g",
  authDomain: "walkers-ecommerce.firebaseapp.com",
  projectId: "walkers-ecommerce",
  storageBucket: "walkers-ecommerce.appspot.com",
  messagingSenderId: "685857620749",
  appId: "1:685857620749:web:f03e74f58fee84cfa56644",
  measurementId: "G-3HXXGN5746"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export default db