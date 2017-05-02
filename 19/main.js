var day = 1;

var dateString = (day%31).toString()+"/"+(Math.floor(day/31)%12).toString()+"/"+(1900+Math.floor(day/365)).toString()
console.log(dateString);


var d = new Date("2/12/1900");
var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];
document.getElementById('day').innerHTML = n +" "+ d

