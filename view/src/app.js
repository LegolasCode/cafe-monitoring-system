// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDArcmaIjCff7IUv_xxJbWZX-F-T69ZHGo",
  authDomain: "cafe-monitoring-system.firebaseapp.com",
  projectId: "cafe-monitoring-system",
  storageBucket: "cafe-monitoring-system.firebasestorage.app",
  messagingSenderId: "991765474072",
  appId: "1:991765474072:web:cc800b7c4acc88f7408c6d",
  measurementId: "G-22JHVXQ445"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);