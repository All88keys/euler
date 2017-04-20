var x = 2;
sum = 0;

while(x < 2000000){
  if(isPrime(x)){
    sum = x+sum;
  }
  x++;
}

console.log(sum);


function isPrime(value){
  for(var k = 2; k<value; k++){
    if(value%k === 0){
      return false;
    }
  }
  return true;
}
