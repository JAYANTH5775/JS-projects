// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1MS1bkwJZppWyE-azII7Xw7JYouhmGv4",
  authDomain: "storage-1-146db.firebaseapp.com",
  projectId: "storage-1-146db",
  storageBucket: "storage-1-146db.appspot.com",
  messagingSenderId: "128257593899",
  appId: "1:128257593899:web:c5473f2682f1dd6225d06e",
  measurementId: "G-CZT9QN3MM3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get a reference to the Firebase database
const database = getDatabase();

// Get a reference to the form and listen for a submit event
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the default form submit behavior

  // Get the user input from the form
  const username = document.getElementById('exampleInputusername1').value;
  const email = document.getElementById('exampleInputEmail1').value;
  const password = document.getElementById('exampleInputPassword1').value;

  // Create a new object with the user input
  const newData = {
    username: username,
    email: email,
    password: password
  };

  // Push the new data to the database
  database.ref('users').push(newData)
    .then(function() {
      console.log('Data added to Firebase');
    })
    .catch(function(error) {
      console.error('Error adding data to Firebase:', error);
    });

  // Reset the form
  form.reset();
});