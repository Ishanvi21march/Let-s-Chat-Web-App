function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name" , user_name);
    window.location="kwitter_room.html";
}

const firebaseConfig = {
    apiKey: "AIzaSyAuTR5kbckoHqAwlzu4I516R03OdbohfMo",
    authDomain: "cloud-gaming-e9425.firebaseapp.com",
    databaseURL: "https://cloud-gaming-e9425-default-rtdb.firebaseio.com",
    projectId: "cloud-gaming-e9425",
    storageBucket: "cloud-gaming-e9425.appspot.com",
    messagingSenderId: "68319862944",
    appId: "1:68319862944:web:4f94f80d83f37f3a0fe9c5",
    measurementId: "G-7TFNTTJR0G"
  };
  firebase.initializeApp(firebaseConfig);