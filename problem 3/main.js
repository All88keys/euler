var x = prompt("Enter Number"); //where to put problem number
var scope = 10000;
if(x>Math.pow(10,12)){
  scope = 1000000;
}
var m = 0;


//checks for primes from 0 - scope
for(var i = 1; i<scope; i++){
  if(i%1000 === 0){
    console.log(m);
    m++;
  }
  if(isPrime(i)){
    if(x%i === 0){
      if(i !== x){
        x = x/i;
        //console.log('Prime Factor:',x);
      }
    }
  }
}
console.log('Largest Prime Factor:',x);

//Function determines if prime
function isPrime(value){
  for(var k = 2; k<value; k++){
    if(value%k === 0){
      return false;
    }
  }
  return true;
}
