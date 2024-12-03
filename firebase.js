// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-yZsTFJubjveNmNjtke-IBLH1e2Am5wI",
  authDomain: "election-system2025.firebaseapp.com",
  projectId: "election-system2025",
  storageBucket: "election-system2025.firebasestorage.app",
  messagingSenderId: "347404507925",
  appId: "1:347404507925:web:65b92d1181ad34c840e71c",
  measurementId: "G-Q5BQRSBBVW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);