var sundaycounter = 0;
var daycounter = 0;
var day = 1;
var month = 12;
var year = 1901;
var bigMonths = [1,3,5,7,8,10,12];
var smallMonths = [4,6,9,11]
var february = 28;

var addDay = function(){
day++;
daycounter++;
//finds how many days are in february
if(year % 4 == 0){
	february = 29;
  if(year % 100 == 0){
  	february = 28;
    if(year % 400 == 0){
    	february = 29;
    }
  }
}
else{
	february = 28;
}

//checks if month is a bigmonth
for(var i = 0; i<bigMonths.length; i++){
	if(month == bigMonths[i]){
  	if(day > 31){
		month++;
  	day = 1;
    if(month > 12){
    	month = 1;
      year++;
    }
		}
  }
}

//checks if month is february
if(month == 2){
	if(day > february){
		month++;
  	day = 1;
  }
}

//else clause for small months
for(var i = 0; i<smallMonths.length; i++){
	if(month == smallMonths[i]){
  	if(day > 30){
		month++;
  	day = 1;
		}
  }
}

if(day == 1 && daycounter%7 == 0)
sundaycounter++;
}

while(year<2001){
addDay();
}
console.log(sundaycounter);

var dateString = null;
var d = new Date(dateString);
var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];
//document.getElementById('day').innerHTML = n +"<br>"+ d + "<br>" + dateString;
