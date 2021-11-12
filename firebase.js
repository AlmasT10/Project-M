// Import the functions you need from the SDKs you need
import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1W_qR6HUWzKsPdc8WQfH8y4ZxpVDddkk",
  authDomain: "project-m-6deb1.firebaseapp.com",
  projectId: "project-m-6deb1",
  storageBucket: "project-m-6deb1.appspot.com",
  messagingSenderId: "893698899619",
  appId: "1:893698899619:web:a947a40977fe7fa52c8916",
  measurementId: "G-H3CTDR3Z7N",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };
