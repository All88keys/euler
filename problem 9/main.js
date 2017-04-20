var a = 1;
var b = 1;
var c = 0;
var turn = 0;

loop:
while(true){
  c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
  if(a+b+c !== 1000 ){
    if(turn%1000 == 0){
      a++;
      b = 1;
    }
    else {
      b++;
    }
    turn++;
  }
  else {
    break loop;
  }

}

console.log(a,b,c);
console.log(a*b*c);
