var index = localStorage.getItem('personIndex');
var jsonBlob = JSON.parse(localStorage.getItem('careTakerDataLocalStorage'));
var careProviderData = jsonBlob[index - 1];

var simpleData = {'name': careProviderData['name']};
console.log(simpleData);

$(function () {

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