firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.getElementById("login_div").style.display = "none";
      document.getElementById("user_div").style.display = "block";
      var user = firebase.auth().currentUser;


if (user != null) {
 
  var email_id = user.email;
  document.getElementById("user_para").innerHTML = "Welcome" + email_id;
}
    } else {
      // No user is signed in.
      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
    }
  });


function login(){
    var userEmail = document.getElementById("email_field").value;
    var userPassword = document.getElementById("password_field").value;
    window.alert(userEmail +  userPassword);
    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        window.alert(errorCode + errorMessage);
      });
}

function logout(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
}
