// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

function random(array) {
    return array[Math.floor(Math.random() * array.length)]
};

function exclusiveRandom(array,quantity) {
    var pos, result, element;
    for (i=0;i<quantity;i++){
      pos = Math.floor(Math.random() * array.length);
      element = array.splice(pos,1)
      result.push(element[0]);
    }
    return result;
};

function stress(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var number = Math.floor(Math.random() * (max - min + 1)) + min;
  var total = '';
  for (i=0;i<number;i++)
  	total = total + 'O';
  return total;
}; 