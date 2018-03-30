$(document).ready(function(){
	$("#signout-container").hide();
});
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  $("#signout-container").show();
  $("#signin-container").hide();
  $("#loggedUserImage").attr("src", profile.getImageUrl());
  $("#loggedUsername").html(profile.getName());
  $("#loggedUserEmail").html(profile.getEmail());
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
function signOut() {
	var auth2 = gapi.auth2.getAuthInstance();
	auth2.signOut().then(function () {
	  console.log('User signed out.');
	  $("#signout-container").hide();
	  $("#signin-container").show();
	});
}