//Split the string into an array
function titleCase(str) {
  var words = str.toLowerCase().split(' ');

  console.log(words); //show change to "words"

  //map the words array and replace the first index of every element to uppercase
  var result = words.map(function(val){
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });

  console.log(result.join(' '));//show change to "join"
  return result.join(" ");

}

titleCase("I'm a little tea pot");
