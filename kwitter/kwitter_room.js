
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {

    apiKey: "AIzaSyCddszAJxRH6JdqnmYPjlTuAT-u1w-DXbo",

    authDomain: "kwiter-ead70.firebaseapp.com",

    databaseURL: "https://kwiter-ead70-default-rtdb.firebaseio.com",

    projectId: "kwiter-ead70",

    storageBucket: "kwiter-ead70.appspot.com",

    messagingSenderId: "824555237470",

    appId: "1:824555237470:web:463372a1e23a64556a84cf",

    measurementId: "G-4CT2B6XEN3"

  };

  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
  var user_name= localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML= "Welcome "+user_name+"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
});});}
getData();
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      console.log("room_name1 "+room_name);
      firebase.database().ref("/").child(room_name).update({
             purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      console.log("room_name"+room_name);
      window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
         window.location = "index.html";
}