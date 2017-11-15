$(function () {
      var currUser = localStorage.getItem('loggedInUserIndex');
      var userData = JSON.parse(localStorage.getItem('userDataLocalStorage'));

      for(var i = 0; i < userData.length; i++) {
            var currData = userData[i];

            if(currData.userIndex == currUser)
            {
                  var dataOfCurrUser = currData; 
                  document.getElementById("fName").innerHTML = dataOfCurrUser.fName;
                  document.getElementById("lName").innerHTML = dataOfCurrUser.lName;
                  document.getElementById("city").innerHTML = dataOfCurrUser.city;
                  document.getElementById("state").innerHTML = dataOfCurrUser.state;
                  document.getElementById("zip").innerHTML = dataOfCurrUser.zip;
                  document.getElementById("phone").innerHTML = dataOfCurrUser.phone;
                  document.getElementById("add").innerHTML = dataOfCurrUser.add;

                  break;
            }

            
      }

});