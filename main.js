// import Firebase from 'firebase';
// import ReactDom from 'react-dom';
var Firebase = require("firebase");


var myFirebaseRef = new Firebase("https://jesse-first-app.firebaseio.com/");

// console.log(myFirebaseRef);


myFirebaseRef.set({
  title: "Hello World!",
  author: "Firebase",
  location: {
    city: "San Francisco",
    state: "California",
    zip: 94103
  }
});