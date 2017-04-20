var x = 2; //starting number
var y = 20; //program will find first number divisible by 1-y

loop1:
while(true){
  loop2:
  for(var i = 1; i<=y; i++){
    if(x%i !== 0){
      x++;
      break loop2;
    }
    if(i === y){
      break loop1;
    }
  }

}

console.log(x);
