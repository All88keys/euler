var isPal = function(value){
  value = value.toString();
  var k =value.length-1;
  for(var j = 0; j<k; j++){
    if(value[j] !== value[k])
    return false;
    k--;
  }
return true;
}

var x = 999;
var answer = 0;

/*while(!(isPal(x*y))){
  if(z%2 === 0){
    x--;
  }
  else {
    y--;
  }
  z++;
}*/

for(x; x>99; x--){
  for(y = 999; y>99; y--){
    if(isPal(x*y) && x*y>answer){
      answer = x*y;
    }
  }
}




console.log(answer);
