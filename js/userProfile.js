// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  console.log('hello world');

  // when you first load the page, set a custom name if you have one:
  var name = localStorage.getItem('customName');
  if (name) {
    $("#fName").html(name);
  }

  // use localStorage to store your name
  $("#changeName").click(function() {
    var newName = prompt("What's your new name?");
    if (newName) {
      $("#fName").html(newName);
      localStorage.setItem('fName', newName);
    }
  });
})


/*
localStorage.setItem('careTakerDataLocalStorage', JSON.stringify(careTakerData));
	var fName = localStorage.getItem('fName');
	var lName = localStorage.getItem('lName');
	var address = localStorage.getItem('address');
	var city = localStorage.getItem('city');
	var state = localStorage.getItem('state');
	var zip = localStorage.getItem('zip');
	var phone = localStorage.getItem('phone');
*/