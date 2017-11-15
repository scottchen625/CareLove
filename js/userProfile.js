var userData = [
    {'fName':'Justin', 'lName' : 'Gil', 'age': 70, 'gender': 'M', 'phone': '949-111-1111', 'profilePic': 'pix/claudio.jpg', 'city' : 'San Diego', 'add' : '55 Serenity'
    , 'Bio': 'I like soccer and long walks on the beach.', 'userIndex' : 1, 'username': 'justin', 'password': 'lol'},
    {'fName':'Momin', 'lName' : 'Khan', 'age': 60, 'gender': 'M', 'phone': '949-111-1312', 'profilePic': 'pix/claudio.jpg', 'city' : 'Carlsbad', 'add' : '23 Rollings'
    , 'Bio': 'I like soccer and long walks on the beach.', 'userIndex' : 2, 'username': 'momin', 'password': 'lol'},
    {'fName':'Scott', 'lName' : 'Chen', 'age': 50, 'gender': 'M', 'phone': '949-111-1113', 'profilePic': 'pix/claudio.jpg', 'city' : 'Oceanside', 'add' : '35 Jasmin'
    , 'Bio': 'I like soccer and long walks on the beach.', 'userIndex' : 3, 'username': 'scott', 'password': 'lol'},
    {'fName':'Charles', 'lName' : 'Chen', 'age': 72, 'gender': 'M', 'phone': '949-111-1114', 'profilePic': 'pix/claudio.jpg', 'city' : 'Coronado', 'add' : '388 Rose', 
     'Bio': 'I like soccer and long walks on the beach.', 'userIndex' : 4, 'username': 'charles', 'password': 'lol'}
    ]

localStorage.setItem('userDataLocalStorage', JSON.stringify(userData));


$(function () {
    var invalidAccountWarning = document.getElementById("invalid_account_warning");
    invalidAccountWarning.style.display = "none";
});


$("#login").click(function() {
    var invalidAccountWarning = document.getElementById("invalid_account_warning");
    invalidAccountWarning.style.display = "none";
    var username = document.getElementById("inputted_username").value;
    var password = document.getElementById("inputted_password").value;
    var loggedInUserIndex = 0; 
    for (var i = 0; i < userData.length; i++) {
        var currData = userData[i]; 
        if(username == currData.username && password == currData.password)
           loggedInUserIndex = currData.userIndex;  
    }
    if(loggedInUserIndex != 0) {
        localStorage.setItem('loggedInUserIndex', loggedInUserIndex);
        console.log(loggedInUserIndex);
        window.location.href = 'home.html';
    }
    else {
        invalidAccountWarning.style.display = "block";
    }
    
});

