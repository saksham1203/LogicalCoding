// string

function palindrom(str) {
  str = str.toLowerCase();
  reversString = str.toLowerCase().split("").reverse().join("");
  if (reversString === str) {
    return console.log(`${str} - is a palindrom`);
  } else return console.log(`${str} - is not a palindrom`);
}
palindrom("Sam");

//if number

function NumberPalindrom(num) {
  // console.log(typeof(str)===number)
  num = num.toString();
  reverseNum = num.split("").reverse().join("");
  if (reverseNum === num) {
    return console.log(`${num} - is a palindrom`);
  } else return console.log(`${num} - is not a palindrom`);
}
NumberPalindrom(121);
