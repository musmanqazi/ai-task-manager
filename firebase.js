// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJU_x1YCPynHUciBV9BHe7D_AhcnjzHbc",
  authDomain: "ai-task-manager-fed10.firebaseapp.com",
  projectId: "ai-task-manager-fed10",
  storageBucket: "ai-task-manager-fed10.firebasestorage.app",
  messagingSenderId: "932573317259",
  appId: "1:932573317259:web:e03df9111ca5f007196c8e",
  measurementId: "G-127H76NYXP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);