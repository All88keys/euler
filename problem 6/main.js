var x = 100;
var sum = 0;
var squareSum = 0;

for(var i = 1; i<=x; i++){
  sum = sum + i;
}

for(var i = 1; i<=x; i++){
  squareSum = squareSum + Math.pow(i,2);
}

console.log(Math.pow(sum,2)-squareSum)
