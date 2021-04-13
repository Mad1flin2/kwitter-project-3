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



user_name = localStorage.getItem("user_name_storage");
document.getElementById("user_name_h3").innerHTML = "Welcome " + user_name + "!";
window.alert("Welcome " + user_name + "!");


function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  //window.location=""
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name-" + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onClick='redirectToRoomName(this.id)' <#" + Room_names + "</div><hr>";
    })
  })
}

function logout() {
  window.location = "http://127.0.0.1:5500/login/login2.html";
};