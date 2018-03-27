// function palidrome(str) {
//     return str.replace(/\W/g, "").toLowerCase() === 
//     str.replace(/\W/g, "").toLowerCase().split('').
//     reverse().join('');
// }

// palindrom("_eye");


function palindrome(str) {

  
  str = str.replace(/[\W_]/g, "").toLowerCase();
  
  console.log(str);
  
  var compare = str.split('').reverse().join('');
  
  console.log(compare);
  
  console.log(compare === str);
  
}


  
palindrome("_eye");