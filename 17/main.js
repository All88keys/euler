total = 0;
for (var i = 1; i < 1000; i++) {
  var characters = findWords(i).split("");
  total = total + characters.length;
}
console.log(total);

function findWords(num){
  var english = [];
  var hundreds;
  var tens;
  var ones;
  var word = "";
  ones = num%10;
  tens = (num%100) - (num%10);
  hundreds = num - (num%100);
  switch (hundreds) {
    case 100:
      english.push("one");
      break;
    case 200:
      english.push("two");
      break;
    case 300:
      english.push("three");
      break;
    case 400:
      english.push("four");
      break;
    case 500:
      english.push("five");
      break;
    case 600:
      english.push("six");
      break;
    case 700:
      english.push("seven");
      break;
    case 800:
      english.push("eight");
      break;
    case 900:
      english.push("nine");
      break;
    default:;
  }
  if (num>=100) {
    english.push('hundred');
  }

  if ((tens !== 0 || ones !==0) && hundreds>0) {
    english.push('and');
  }

  if (tens<20) {
    ones = num%100;
  }
  else {
    switch (tens) {
      case 20:
        english.push("twenty");
        break;
      case 30:
        english.push("thirty");
        break;
      case 40:
        english.push("forty");
        break;
      case 50:
        english.push("fifty");
        break;
      case 60:
        english.push("sixty");
        break;
      case 70:
        english.push("seventy");
        break;
      case 80:
        english.push("eighty");
        break;
      case 90:
        english.push("ninety");
        break;
      default:

    }
  }



  switch(ones){
    case 1:
      english.push("one");
      break;
    case 2:
      english.push("two");
      break;
    case 3:
      english.push("three");
      break;
    case 4:
      english.push("four");
      break;
    case 5:
      english.push("five");
      break;
    case 6:
      english.push("six");
      break;
    case 7:
      english.push("seven");
      break;
    case 8:
      english.push("eight");
      break;
    case 9:
      english.push("nine");
      break;
    case 10:
      english.push("ten");
      break;
    case 11:
      english.push("eleven");
      break;
    case 12:
      english.push("twelve");
      break;
    case 13:
      english.push("thirteen");
      break;
    case 14:
      english.push("fourteen");
      break;
    case 15:
      english.push("fifteen");
      break;
    case 16:
      english.push("sixteen");
      break;
    case 17:
      english.push("seventeen");
      break;
    case 18:
      english.push("eighteen");
      break;
    case 19:
      english.push("nineteen");
      break;
    default:
      break;
  }
    console.log(english);
    for (var i = english.length-1; i >= 0; i--) {
      word = english[i]+word;
    }
    console.log(word);
    return word;
}
