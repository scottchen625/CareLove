var index = localStorage.getItem('personIndex');
var jsonBlob = JSON.parse(localStorage.getItem('careTakerDataLocalStorage'));
var careProviderData = jsonBlob[index - 1];


$(function () {

  // compile the template
  var source   = $("#entry-template").html();
  var template = Handlebars.compile(source);

  // where to inject the template
  var parentDiv = $("#templatedProjects");

  // start with a simple template
  var html = template(careProviderData);
  console.log(html);
  parentDiv.append(html);

});
