let arr = [1, 3, 5];
function breakOut(array, changeValue, stopValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === stopValue) {
      break;
    }
    array[i] = array[i] + 3;
  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {

}

function findBy(array, findFn) {

}
