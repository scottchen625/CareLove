$(document).ready(function() {
	localStorage.setItem('filterPageVisited', 1);

	var minAgeWarning = document.getElementById("min-age-warning");
    minAgeWarning.style.display = "none";

    var minMaxWarning = document.getElementById("min-max-warning");
    minMaxWarning.style.display = "none";

});

$("#searchButton").click(function() {
	var minMaxWarning = document.getElementById("min-max-warning");
	var minAgeWarning = document.getElementById("min-age-warning");
	minMaxWarning.style.display = "none";
	minAgeWarning.style.display = "none";

	var minAge = document.getElementById("minAge").value;	
	var maxAge = document.getElementById("maxAge").value;

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

	if (document.getElementById("locationOption1").checked) {
  		var locationDistance = document.getElementById("locationOption1").value;
	}
	else if (document.getElementById("locationOption2").checked) {
  		var locationDistance = document.getElementById("locationOption2").value;
	}
	else if (document.getElementById("locationOption3").checked) {
  		var locationDistance = document.getElementById("locationOption3").value;
	}
	else if (document.getElementById("locationOption4").checked) {
  		var locationDistance = document.getElementById("locationOption4").value;
	}
	else {
		var locationDistance = document.getElementById("locationOption5").value;
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
	localStorage.setItem('locationDistance', locationDistance);
	localStorage.setItem('gender', gender);

	
	if(minAge >= 18 && maxAge >= 18) {
		if(minAge > maxAge) {
    		minMaxWarning.style.display = "block";
    	} else {
			window.location.href = "home.html"; 
		}
	} else {
    	minAgeWarning.style.display = "block";
    	if(minAge > maxAge) {
    		minMaxWarning.style.display = "block";
    	}
	}


});