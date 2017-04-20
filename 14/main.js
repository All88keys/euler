var high = 0;
var highx = 0;
var x;
for(var i = 2; i<1000000; i++){
	var count = 0;
	x = i;
  while(x !== 1){
  	if(x%2 === 0){
    	x = x/2
    }
    else{
    	x = 3*x+1;
    }
    count++;
  }
  if(count>high){
  	high = count;
    highx = i;
  }
}
console.log(high);
console.log(highx);
