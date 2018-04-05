
function rot13(str) { // LBH QVQ VG!
    var arr = str.split('');
    var rot;
    var punct = ['.', '!', '?', ' '];
    var punctChar = [];
    var newArr = [];
    var fixArr = [];
    var finalArr = [];

    for (var k = 0; k < punct.length; k++){
        punctChar.push(punct.toString().replace(/,/g, '').charCodeAt(k));
    }

    for (var i = 0; i < arr.length; i++){

      rot = str.charCodeAt(i);

      if (rot <= 77){
        rot += 13;
        newArr.push(rot);
      } else if (rot >= 78){
        rot -= 13;
        newArr.push(rot);
      }
    }

//     for (var m = 0; m < punctChar.length; m++){

//       rot = punctChar[m];

//       if (rot == punctChar[m]){
//         rot = punctChar[m];
//         newArr.push(rot);
//       }
//     }


    console.log(newArr);

    for (var j = 0; j < newArr.length; j++){
        for (var l = 0; l < punct.length; l++){
            punct.toString().replace(/,/g, '').charCodeAt(k)
            if (newArr[j] == punct[l]){
            fixArr.push(punct[l]);
            }
        }
        fixArr.push(String.fromCharCode(newArr[j]));
    }

    console.log(fixArr.toString().replace(/,/g, ''));



}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

//////////////////////////////////////////////////////////////////////////////

function rot13(str) {
  var splitString = str.toUpperCase().split('');
  var stringConverted = [];
  var stringFrom = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var stringTo = 'NOPQRSTUVWXYZABCDEFGHIJKLM';

  for(var i = 0; i < splitString.length; i++){
    if(stringFrom.indexOf(splitString[i]) > -1){
      for(var j = 0; j < stringFrom.length; j++)
      {
        if(splitString[i] == stringFrom[j]){
          var convert = stringTo[j];
          stringConverted.push(convert);
        }
      }
    }

    else{
      stringConverted.push(splitString[i]);
    }

  }
  var stringReturn = stringConverted.join('');
  return stringReturn;
}

console.log(rot13("SERR CVMMN!"));
