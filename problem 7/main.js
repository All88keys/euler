var x = 1;
var y = 10001;
var z = 0;

loop1:
while(true){
  if(isPrime(x)){
    z++;
    if(z>y){
      break loop1;
    }
  }
  x++;
}

console.log(x);

function isPrime(value){
  for(var k = 2; k<value; k++){
    if(value%k === 0){
      return false;
    }
  }
  return true;
}
