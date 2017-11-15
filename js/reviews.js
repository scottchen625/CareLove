var index = localStorage.getItem('personIndex');
var jsonBlob = JSON.parse(localStorage.getItem('careTakerDataLocalStorage'));
var careProviderData = jsonBlob[index - 1];

var simpleData = {'name': careProviderData['name']};
console.log(simpleData);

$(document).ready(function() {
  var starText = document.getElementById("star_text");
  starText.style.display = "none";

  var starOptions = document.getElementById("star_options");
  starOptions.style.display = "none";

  var newReview = document.getElementById("newReview");
  newReview.style.display = "none";

  var submitButton = document.getElementById("submit_button");
  submitButton.style.display = "none";

  var reviewSubmissionMessage = document.getElementById("review_submission_message");
  reviewSubmissionMessage.style.display = "none";

  
  // start with a simple template
  var source   = $("#name-entry").html();
  var template = Handlebars.compile(source);
  var parentDiv = $("#injectName");
  var html = template(simpleData);
  console.log(careProviderData.review_array);
  parentDiv.append(html);

  // compile the template
  var source   = $("#entry-template").html();
  var template = Handlebars.compile(source);

  // where to inject the template
  var parentDiv = $("#templatedProjects");

  var review_array = careProviderData.review_array;
  var stars_array = careProviderData.stars_array;

  var data = [];
  for (var i = 0; i < review_array.length; i++) {
    var reviewObject = new Object();
    reviewObject["stars"] = stars_array[i];
    reviewObject["review_text"] = review_array[i];
    data.push(reviewObject);
  }

  console.log(data);

  // now iterate through the reviews
  for (var i = 0; i < data.length; i++) {
    var curData = data[i];
    var curHtml = template(curData);
    parentDiv.append(curHtml);
  }

});


$("#write_review_button").click(function() {
  var writeReviewButton = document.getElementById("write_review_button");
  writeReviewButton.style.display = "none";

  var starText = document.getElementById("star_text");
  starText.style.display = "inline";

  var starOptions = document.getElementById("star_options");
  starOptions.style.display = "inline";

  var submitButton = document.getElementById("submit_button");
  submitButton.style.display = "inline";

  var newReview = document.getElementById("newReview");
  newReview.style.display = "inline";
});

$("#submit_button").click(function() {
  var submitButton = document.getElementById("submit_button");
  submitButton.style.display = "none";

  var newReview = document.getElementById("newReview");
  newReview.style.display = "none";

  var starText = document.getElementById("star_text");
  starText.style.display = "none";

  var starOptions = document.getElementById("star_options");
  starOptions.style.display = "none";

  var submitButton = document.getElementById("submit_button");
  submitButton.style.display = "none";

  var reviewSubmissionMessage = document.getElementById("review_submission_message");
  reviewSubmissionMessage.style.display = "inline";

});
