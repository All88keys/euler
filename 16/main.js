$.getScript("math.js", function(){

   alert("Script loaded but not necessarily executed.");

});

math.config({
  number: 'BigNumber', // Default type of number:
                       // 'number' (default), 'BigNumber', or 'Fraction'
  precision: 64        // Number of significant digits for BigNumbers
});

// use math
console.log(math.eval('2 ^ 3')); // BigNumber, 0.3
