function invertArray(ar) {
  let arra = ar.split("\n");
  array = arra.map(function(el) {
    return el.split(" ")
  })


  var rows = array.length;
  var columns = array[0].length;
  let newArray = [];
  for (let i = 0; i < columns; i++) {
    newArray[i] = [];
    for (let j = 0; j < rows; j++) {
      newArray[i][j] = parseInt(array[j][i]);
      // console.log(y, x, array[y])
      // console.log('---')
    }
  }
  return newArray;
}
console.log(invertArray("9 8 4 7\n5 4 3 2\n6 4 6 7\n6 58 32 3"));
