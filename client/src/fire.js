import firebase from 'firebase'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCHnItqI4zmKnZIfU9NOiSFN_VGRHWm9qo",
    authDomain: "addfriendtest-c1727.firebaseapp.com",
    databaseURL: "https://addfriendtest-c1727.firebaseio.com",
    projectId: "addfriendtest-c1727",
    storageBucket: "addfriendtest-c1727.appspot.com",
    messagingSenderId: "190995725255"
  };
var fire = firebase.initializeApp(config);
export default fire;