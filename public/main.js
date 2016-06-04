 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBEXQJ68MtLhqtfT_QMHXmVNDvGTnpsOoY",
    authDomain: "jesse-first-app.firebaseapp.com",
    databaseURL: "https://jesse-first-app.firebaseio.com",
    storageBucket: "",
  };
  firebase.initializeApp(config);

  function writeUserData(userId, name, email) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email
  });
  }
  writeUserData(07, 'mark', 'marklab@hotmail.com');
  writeUserData(08, 'marcia', 'marcialab@hotmail.com');
  writeUserData(09, 'jesse', 'jesselab@hotmail.com');
  writeUserData(10, 'nate', 'natelab@hotmail.com');

