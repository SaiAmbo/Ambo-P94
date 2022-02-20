
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAkabXjaOaseh_xuHMXr5LnnSN8T1Uf2bo",
      authDomain: "amartya-kwitter.firebaseapp.com",
      databaseURL: "https://amartya-kwitter-default-rtdb.firebaseio.com",
      projectId: "amartya-kwitter",
      storageBucket: "amartya-kwitter.appspot.com",
      messagingSenderId: "519426241081",
      appId: "1:519426241081:web:45b33434c2b5e4747b93e8"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
