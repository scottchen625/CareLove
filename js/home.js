$(function () {
	var careTakerData = [
  		{'name':'Claudio', 'age': 30, 'gender': 'M', 'phone': '123-456-7890', 'hourly_rate':40, 'stars': 4, 'num_reviews': 11, 'profilePic': 'pix/claudio.jpg', 
  		 'profilePage': 'pages/careProviderProfilePages/personA.html', 'Bio': 'something about Claudio', 
  		 'Monday': 0, 'Tuesday': 1, 'Wednesday': 1, 'Thursday': 1, 'Friday': 0, 'Saturday': 1, 'Sunday': 1, 
  		 'index': 1},
  		{'name':'Stephanie', 'age': 30, 'gender': 'F', 'phone': '123-456-7890', 'hourly_rate':50, 'stars': 5, 'num_reviews': 13, 'profilePic': 'pix/stephanie.jpeg', 
  		 'profilePage': 'pages/careProviderProfilePages/personB.html', 'Bio': 'something about Stephanie', 
  		 'Monday': 1, 'Tuesday': 0, 'Wednesday': 1, 'Thursday': 0, 'Friday': 1, 'Saturday': 0, 'Sunday': 1, 
  		 'index': 2},
  		{'name':'Hasan', 'age': 30, 'gender': 'M', 'phone': '123-456-7890', 'hourly_rate':45, 'stars': 5, 'num_reviews': 23, 'profilePic': 'pix/hasan.jpg', 
  		 'profilePage': 'pages/careProviderProfilePages/personB.html', 'Bio': 'something about Hasan', 
  		 'Monday': 0, 'Tuesday': 1, 'Wednesday': 0, 'Thursday': 1, 'Friday': 1, 'Saturday': 0, 'Sunday': 1, 
  		 'index': 3},
  		{'name':'Jennifer', 'age': 30, 'gender': 'F', 'phone': '123-456-7890', 'hourly_rate':35, 'stars': 4, 'num_reviews': 7, 'profilePic': 'pix/jennifer.jpg', 
  		 'profilePage': 'pages/careProviderProfilePages/personB.html', 'Bio': 'something about Jennifer', 
  		 'Monday': 1, 'Tuesday': 1, 'Wednesday': 0, 'Thursday': 0, 'Friday': 0, 'Saturday': 0, 'Sunday': 1, 
  		 'index': 4}, 
  		{'name':'John', 'age': 30, 'gender': 'M', 'phone': '123-456-7890', 'hourly_rate':43, 'stars': 4, 'num_reviews': 17, 'profilePic': 'pix/john.png', 
  		 'profilePage': 'pages/careProviderProfilePages/personB.html', 'Bio': 'something about John', 
  		 'Monday': 0, 'Tuesday': 1, 'Wednesday': 0, 'Thursday': 1, 'Friday': 1, 'Saturday': 0, 'Sunday': 1, 
  		 'index': 5},
  		{'name':'Maria', 'age': 30, 'gender': 'F', 'phone': '123-456-7890', 'hourly_rate':37, 'stars': 5, 'num_reviews': 27, 'profilePic': 'pix/maria.jpg', 
  		 'profilePage': 'pages/careProviderProfilePages/personB.html', 'Bio': 'something about Maria', 
  		 'Monday': 0, 'Tuesday': 1, 'Wednesday': 1, 'Thursday': 1, 'Friday': 0, 'Saturday': 1, 'Sunday': 1, 
  		 'index': 6},
  		{'name':'Rachel', 'age': 30, 'gender': 'F', 'phone': '123-456-7890', 'hourly_rate':55, 'stars': 5, 'num_reviews': 30, 'profilePic': 'pix/rachel.jpg', 
  		 'profilePage': 'pages/careProviderProfilePages/personB.html', 'Bio': 'something about Rachel', 
  		 'Monday': 1, 'Tuesday': 1, 'Wednesday': 1, 'Thursday': 1, 'Friday': 1, 'Saturday': 1, 'Sunday': 1, 
  		 'index': 7},
  		{'name':'Ron', 'age': 30, 'gender': 'M', 'phone': '123-456-7890', 'hourly_rate':25, 'stars': 3, 'num_reviews': 20, 'profilePic': 'pix/ron.jpg', 
  		 'profilePage': 'pages/careProviderProfilePages/personB.html', 'Bio': 'something about Ron', 
  		 'Monday': 0, 'Tuesday': 0, 'Wednesday': 0, 'Thursday': 1, 'Friday': 1, 'Saturday': 1, 'Sunday': 0, 
  		 'index': 8},
  		{'name':'Sarah', 'age': 30, 'gender': 'F', 'phone': '123-456-7890', 'hourly_rate':33, 'stars': 5, 'num_reviews': 2, 'profilePic': 'pix/sarah.jpg', 
  		 'profilePage': 'pages/careProviderProfilePages/personB.html', 'Bio': 'something about Sarah', 
  		 'Monday': 0, 'Tuesday': 1, 'Wednesday': 0, 'Thursday': 1, 'Friday': 1, 'Saturday': 1, 'Sunday': 0, 
  		 'index': 9},
  		{'name':'Theo', 'age': 30, 'gender': 'M', 'phone': '123-456-7890', 'hourly_rate':15, 'stars': 4, 'num_reviews': 15, 'profilePic': 'pix/theo.jpg', 
  		 'profilePage': 'pages/careProviderProfilePages/personB.html', 'Bio': 'something about Theo', 
  		 'Monday': 1, 'Tuesday': 0, 'Wednesday': 0, 'Thursday': 1, 'Friday': 0, 'Saturday': 1, 'Sunday': 0, 
  		 'index': 10}
	]

	var minAgeFilter = localStorage.getItem('minAge');
	console.log(minAgeFilter);

	$("#ageSomething").html(minAgeFilter);

  	// compile the template
  	var theTemplateScript   = $("#caretaker-list-template").html();
  	var theTemplate = Handlebars.compile(theTemplateScript);

  	for (var i = 0; i < careTakerData.length; i++) {
    	var curData = careTakerData[i];
    	var curHtml = theTemplate(curData);
    	$(".caretakersNav").append(curHtml);
  	}



  	// when you first load the page, set a custom name if you have one:
  var name = localStorage.getItem('customName');
  if (name) {
    $("#myName").html(name);
  }

  // use localStorage to store your name
  $("#changeName").click(function() {
    var newName = prompt("What's your new name?");
    if (newName) {
      $("#myName").html(newName);
      localStorage.setItem('customName', newName);
    }
  });

});