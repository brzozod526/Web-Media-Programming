

var age = prompt ("Enter your age");

var todaydate = new Date();
var thisyear = todaydate.getFullYear();
var birthdate = thisyear-age;

document.getElementById("birthyear").innerHTML=birthdate;
