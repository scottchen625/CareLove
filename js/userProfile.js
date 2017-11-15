$(function () {
    var userData = [
    {'fName':'Justin', 'lName' : 'Gil', 'age': 70, 'gender': 'M', 'phone': '949-111-1111', 'profilePic': 'pix/claudio.jpg', 'city' : 'San Diego', 'add' : '55 Serenity'
    , 'Bio': 'I like soccer and long walks on the beach.', 'userIndex' : 1},
    {'fName':'Momin', 'lName' : 'Kahn', 'age': 60, 'gender': 'M', 'phone': '949-111-1312', 'profilePic': 'pix/claudio.jpg', 'city' : 'Carlsbad', 'add' : '23 Rollings'
    , 'Bio': 'I like soccer and long walks on the beach.', 'userIndex' : 2},
    {'fName':'Scott', 'lName' : 'Chen', 'age': 50, 'gender': 'M', 'phone': '949-111-1113', 'profilePic': 'pix/claudio.jpg', 'city' : 'Oceanside', 'add' : '35 Jasmin'
    , 'Bio': 'I like soccer and long walks on the beach.', 'userIndex' : 3},
    {'fName':'Charles', 'lName' : 'Chen', 'age': 72, 'gender': 'M', 'phone': '949-111-1114', 'profilePic': 'pix/claudio.jpg', 'city' : 'Coronado', 'add' : '388 Rose'
    , 'Bio': 'I like soccer and long walks on the beach.', 'userIndex' : 4},
    {'fName':'Philip', 'lName' : 'Guo', 'age': 74, 'gender': 'M', 'phone': '949-111-1115', 'profilePic': 'pix/claudio.jpg', 'city' : 'Solana Beach', 'add' : '213 Wizzle'
    , 'Bio': 'I like soccer and long walks on the beach.', 'userIndex' : 5},
    ]

    localStorage.setItem('userDataLocalStorage', JSON.stringify(userData));
}


);

