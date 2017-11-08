$(function () {
	// when you first load the page, set a custom name if you have one:
  /*var age = localStorage.getItem('minAge');
  if (age) {
    $("#minAge").html(age);
  }
  else {
  	var newAge = prompt("what's your min age range");
  	localStorage.setItem('minAge', newAge);
  }*/

});


$("#searchButton").click(function() {
	console.log("reached click");
	var minAge = document.getElementById("minAge").value;	
	var maxAge = document.getElementById("maxAge").value;
	console.log(minAge);
	if (document.getElementById("priceOption1").checked) {
  		var priceRange = document.getElementById("priceOption1").value;
	}
	else if (document.getElementById("priceOption2").checked) {
  		var priceRange = document.getElementById("priceOption2").value;
	}
	else if (document.getElementById("priceOption3").checked) {
  		var priceRange = document.getElementById("priceOption3").value;
	}
	else if (document.getElementById("priceOption4").checked) {
  		var priceRange = document.getElementById("priceOption4").value;
	}
	else {
		var priceRange = document.getElementById("priceOption5").value;
	}

	if(document.getElementById("GenderMale").checked) {
		var gender = document.getElementById("GenderMale").value;
	}
	else if (document.getElementById("GenderFemale").checked) {
		var gender = document.getElementById("GenderFemale").value;
	}
	else {
		var gender = document.getElementById("GenderBoth").value;
	}

	localStorage.setItem('minAge', minAge);
	localStorage.setItem('maxAge', maxAge);
	localStorage.setItem('priceRange', priceRange);
	localStorage.setItem('gender', gender);

});