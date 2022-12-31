// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC8qqJNzVhkjDRdtQSeV96xnVFiBDf7kFs",
    authDomain: "my--dream-project.firebaseapp.com",
    projectId: "my--dream-project",
    storageBucket: "my--dream-project.appspot.com",
    messagingSenderId: "116978687201",
    appId: "1:116978687201:web:2a4a7156953cac111c2ba0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;