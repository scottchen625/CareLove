$(function () {
	var careTakerData = [
  		{'name':'Claudio', 'age': 40, 'gender': 'M', 'phone': '949-111-1111', 'hourly_rate':40, 'stars': 4, 'num_reviews': 3, 'profilePic': 'pix/claudio.jpg',
  		 'profilePage': 'careProviderProfile.html', 'Bio': 'I like soccer and long walks on the beach.',
  		 'Monday': 0, 'Tuesday': 1, 'Wednesday': 1, 'Thursday': 1, 'Friday': 0, 'Saturday': 1, 'Sunday': 1,
  		 'index': 1, 'review_array': ['Claudio’s good, but he made me watch soccer all day','Claudio was a good caretaker, and he even took a stroll with me at the beach!','Watched soccer the whole time he was with me. Wouldn’t stop shouting goallllllllll. Now my ears hurt.'],
       'stars_array': [4,5,3], 'distanceFromMomin':19, 'distanceFromScott':27, 'distanceFromJustin':4, 'distanceFromCharles':10},
  		{'name':'Roger', 'age': 25, 'gender': 'M', 'phone': '949-222-2222', 'hourly_rate':50, 'stars': 5, 'num_reviews': 4, 'profilePic': 'pix/roger.jpg',
  		 'profilePage': 'careProviderProfile.html', 'Bio': 'My number one hobby is to abduct humans.',
  		 'Monday': 1, 'Tuesday': 0, 'Wednesday': 1, 'Thursday': 0, 'Friday': 1, 'Saturday': 0, 'Sunday': 1,
  		 'index': 2, 'review_array': ['He abducted me and took me to another galaxy, but I hold nothing against him because it was the most fun I’ve ever had in my life!!','Can’t understand what he’s saying, but seems to be able to read my mind and knows what I want!','Same thing happend to me as what an earlier reviewer mentioned – Roger abducted me and took me to another galaxy. It was an experience of a lifetime!'],
       'stars_array': [5,5,5], 'distanceFromMomin':4, 'distanceFromScott':19, 'distanceFromJustin':10, 'distanceFromCharles':27},
  		{'name':'Hasan', 'age': 28, 'gender': 'M', 'phone': '949-333-3333', 'hourly_rate':45, 'stars': 5, 'num_reviews': 3, 'profilePic': 'pix/hasan.jpg',
  		 'profilePage': 'careProviderProfile.html', 'Bio': 'I like big booties and I cannot lie.',
  		 'Monday': 0, 'Tuesday': 1, 'Wednesday': 0, 'Thursday': 1, 'Friday': 1, 'Saturday': 0, 'Sunday': 1,
  		 'index': 3, 'review_array': ['He muttered “firaga” or something like that, and burned all the cockroaches in my house to death!','He summoned thunder and zapped the neighbor’s annoying dog. Now I can sleep soundly at night.','Hasan took me on a trip flying across town on his magical broomstick! Amazing!'],
       'stars_array': [5,5,5], 'distanceFromMomin':10, 'distanceFromScott':19, 'distanceFromJustin':4, 'distanceFromCharles':27},
  		{'name':'Jennifer', 'age': 37, 'gender': 'F', 'phone': '949-444-4444', 'hourly_rate':35, 'stars': 4, 'num_reviews': 3, 'profilePic': 'pix/jennifer.jpg',
  		 'profilePage': 'careProviderProfile.html', 'Bio': 'I love 50 Shades of Grey.',
  		 'Monday': 1, 'Tuesday': 1, 'Wednesday': 0, 'Thursday': 0, 'Friday': 0, 'Saturday': 0, 'Sunday': 1,
  		 'index': 4, 'review_array': ['Jennifer’s meh','Jennifer’s ok','Jennifer is good'],
       'stars_array': [3,4,5], 'distanceFromMomin':19, 'distanceFromScott':10, 'distanceFromJustin':27, 'distanceFromCharles':4},
  		{'name':'John', 'age': 53, 'gender': 'M', 'phone': '949-555-5555', 'hourly_rate':43, 'stars': 4, 'num_reviews': 3, 'profilePic': 'pix/john.png',
  		 'profilePage': 'careProviderProfile.html', 'Bio': 'I am a boss at basketball.',
  		 'Monday': 0, 'Tuesday': 1, 'Wednesday': 0, 'Thursday': 1, 'Friday': 1, 'Saturday': 0, 'Sunday': 1,
  		 'index': 5, 'review_array': ['John is meh','John is ok','John is good'],
       'stars_array': [3,4,5], 'distanceFromMomin':27, 'distanceFromScott':19, 'distanceFromJustin':10, 'distanceFromCharles':4},
  		{'name':'Maria', 'age': 30, 'gender': 'F', 'phone': '949-666-6666', 'hourly_rate':37, 'stars': 5, 'num_reviews': 3, 'profilePic': 'pix/maria.jpg',
  		 'profilePage': 'careProviderProfile.html', 'Bio': 'I like dancing bachata.',
  		 'Monday': 0, 'Tuesday': 1, 'Wednesday': 1, 'Thursday': 1, 'Friday': 0, 'Saturday': 1, 'Sunday': 1,
  		 'index': 6, 'review_array': ['Maria is good','Maria is great','Maria is awesome'],
       'stars_array': [5,5,5], 'distanceFromMomin':10, 'distanceFromScott':27, 'distanceFromJustin':4, 'distanceFromCharles':19},
  		{'name':'Rachel', 'age': 22, 'gender': 'F', 'phone': '949-777-777', 'hourly_rate':55, 'stars': 5, 'num_reviews': 3, 'profilePic': 'pix/rachel.jpg',
  		 'profilePage': 'careProviderProfile.html', 'Bio': 'I like Japanese food and short walks on the beach.',
  		 'Monday': 1, 'Tuesday': 1, 'Wednesday': 1, 'Thursday': 1, 'Friday': 1, 'Saturday': 1, 'Sunday': 1,
  		 'index': 7, 'review_array': ['Rachel is good','Rachel is great','Rachel is awesome'],
       'stars_array': [5,5,5], 'distanceFromMomin':19, 'distanceFromScott':27, 'distanceFromJustin':10, 'distanceFromCharles':4},
  		{'name':'Ron', 'age': 30, 'gender': 'M', 'phone': '949-888-8888', 'hourly_rate':25, 'stars': 3, 'num_reviews': 3, 'profilePic': 'pix/ron.jpg',
  		 'profilePage': 'careProviderProfile.html', 'Bio': 'I like to collect beers from microbreweries.',
  		 'Monday': 0, 'Tuesday': 0, 'Wednesday': 0, 'Thursday': 1, 'Friday': 1, 'Saturday': 1, 'Sunday': 0,
  		 'index': 8, 'review_array': ['Can’t stand his shit-eating grin','Ron wrote a shitty book and forced me to listen to him reading it all day. Better than watching wheel of fortune though?','Ron brought beers from a local brewery to share with me!'],
       'stars_array': [1,3,5], 'distanceFromMomin':4, 'distanceFromScott':27, 'distanceFromJustin':19, 'distanceFromCharles':10},
  		{'name':'Sarah', 'age': 36, 'gender': 'F', 'phone': '949-999-9999', 'hourly_rate':33, 'stars': 5, 'num_reviews': 3, 'profilePic': 'pix/sarah.jpg',
  		 'profilePage': 'careProviderProfile.html', 'Bio': 'Pumpkin spice latte is, like, the best thing evaaaa.',
  		 'Monday': 0, 'Tuesday': 1, 'Wednesday': 0, 'Thursday': 1, 'Friday': 1, 'Saturday': 1, 'Sunday': 0,
  		 'index': 9, 'review_array': ['Sarah is good','Sarah is great','Sarah is awesome'],
       'stars_array': [5,5,5], 'distanceFromMomin':19, 'distanceFromScott':10, 'distanceFromJustin':4, 'distanceFromCharles':27},
  		{'name':'Theo', 'age': 24, 'gender': 'M', 'phone': '123-456-7890', 'hourly_rate':15, 'stars': 4, 'num_reviews': 3, 'profilePic': 'pix/theo.jpg',
  		 'profilePage': 'careProviderProfile.html', 'Bio': 'I like expensive coffee shops and wearing skinny jeans.',
  		 'Monday': 1, 'Tuesday': 0, 'Wednesday': 0, 'Thursday': 1, 'Friday': 0, 'Saturday': 1, 'Sunday': 0,
  		 'index': 10, 'review_array': ['Theo’s good, but too hipster for me','Theo bought artisan coffee for me – so kind!','I don’t know how he is able to walk around with jeans that tight'],
       'stars_array': [4,5,3], 'distanceFromMomin':27, 'distanceFromScott':19, 'distanceFromJustin':4, 'distanceFromCharles':10}
	]

	localStorage.setItem('careTakerDataLocalStorage', JSON.stringify(careTakerData));

	var minAge = localStorage.getItem('minAge');
	var maxAge = localStorage.getItem('maxAge');
	var priceRange = localStorage.getItem('priceRange');
  var locationDistance = localStorage.getItem('locationDistance');
	var gender = localStorage.getItem('gender');

	if(priceRange == 1)
	{
		var minPrice = 0;
		var maxPrice = 20;
	}
	else if(priceRange == 2)
	{
		var minPrice = 21;
		var maxPrice = 30;
	}
	else if(priceRange == 3)
	{
		var minPrice = 31;
		var maxPrice = 40;
	}
	else if(priceRange == 4)
	{
		var minPrice = 41;
		var maxPrice = 1000;
	}
	else {
		var minPrice = 0;
		var maxPrice = 1000;
	}


  if(locationDistance == 1)
  {
    var minDist = 0;
    var maxDist = 5;
  }
  else if(locationDistance == 2)
  {
    var minDist = 6;
    var maxDist = 15;
  }
  else if(locationDistance == 3)
  {
    var minDist = 16;
    var maxDist = 20;
  }
  else if(locationDistance == 4)
  {
    var minDist = 21;
    var maxDist = 1000;
  }
  else {
    var minDist = 0;
    var maxDist = 1000;
  }


  	// compile the template
  	var theTemplateScript   = $("#caretaker-list-template").html();
  	var theTemplate = Handlebars.compile(theTemplateScript);

  	for (var i = 0; i < careTakerData.length; i++) {
    	var curData = careTakerData[i];
    	if(gender)
    	{
    	if(gender != 'B')
    	{
    		if(curData.gender == gender && curData.hourly_rate <= maxPrice && curData.hourly_rate >= minPrice && curData.age <= maxAge && curData.age >= minAge)
    		{
				var curHtml = theTemplate(curData);
    			$(".caretakersNav").append(curHtml);
    		}
    	}
    	else
    	{
    		if(curData.hourly_rate <= maxPrice && curData.hourly_rate >= minPrice && curData.age <= maxAge && curData.age >= minAge)
    		{
				var curHtml = theTemplate(curData);
    			$(".caretakersNav").append(curHtml);
    		}
    	}
    	}
    	else
    	{
    		var curHtml = theTemplate(curData);
    		$(".caretakersNav").append(curHtml);
    	}
  	}

});


/* Open the sidenav */
function openNav() {
    document.getElementById("mySidenav").style.display = "block";
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
}

function openNewPage(index) {
  localStorage.setItem('personIndex', index);
  window.location.href = "/pages/careProviderProfilePages/personB.html";
}

