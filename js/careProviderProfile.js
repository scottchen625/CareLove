var index = localStorage.getItem('personIndex');
var jsonBlob = JSON.parse(localStorage.getItem('careTakerDataLocalStorage'));
var careProviderData = jsonBlob[index - 1];

careProviderData["availability"] = getAvailability(careProviderData);

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


function getAvailability(careProviderData) {
  var dateString = "";

  if (careProviderData.Monday == 1)
    dateString += "Monday ";
  if (careProviderData.Tuesday == 1)
    dateString += "Tuesday ";
  if (careProviderData.Wednesday == 1)
    dateString += "Wednesday ";
  if (careProviderData.Thursday == 1)
    dateString += "Thursday ";
  if (careProviderData.Friday == 1)
    dateString += "Friday ";
  if (careProviderData.Saturday == 1)
    dateString += "Saturday ";
  if (careProviderData.Sunday == 1)
    dateString += "Sunday";

  return dateString;
}