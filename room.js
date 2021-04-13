var firebaseConfig = {
    apiKey: "AIzaSyCyLKjgq2ncLhzhZfTypTP1eW15vKgzQPo",
    authDomain: "kwitter-e1114.firebaseapp.com",
    databaseURL: "https://kwitter-e1114-default-rtdb.firebaseio.com",
    projectId: "kwitter-e1114",
    storageBucket: "kwitter-e1114.appspot.com",
    messagingSenderId: "548437028658",
    appId: "1:548437028658:web:b03b4cbbc566e5854a312b",
    measurementId: "G-YPZK1KKJDH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
 
  user_name = localStorage.getItem("user_name");
  console.log(user_name);
  logout()
  {
    window.Location="http://127.0.0.1:5500/login/login.html";
  };