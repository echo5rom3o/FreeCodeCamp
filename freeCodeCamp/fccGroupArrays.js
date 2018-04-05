function chunkArrayInGroups(arr, size){

  var breakArr = [];
  var countStart = 0;
  var countEnd = size;
  var forCount = arr.length / size;

  for (var i = 0; i < forCount; i++){

   breakArr.push(arr.slice(countStart, countEnd));
   countStart += size;
   countEnd += size;

   // console.log(breakArr);

  }
  return breakArr;
}


chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
