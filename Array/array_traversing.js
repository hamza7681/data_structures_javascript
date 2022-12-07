let data = [99, 15, 63, 56, 23, 5, 1, 4, 0, 23, 34, 85, 77];
// traversing
for (i = 0; i < data.length; i++) {
  document.write(`Element on ${[i]} index is ${data[i]} <br/>`);
}
// accessing
let x = 3;
document.write(`value on index ${x} is ${data[x]}`);

// accessing by input field
function myFunction() {
  let el = document.getElementById("element").value;
  alert(data[el]);
}

// Insert new element in array
let newData = [60, 30, 10, 56, 40];
let newEl = 70;
let position = 2;
for (i = newData.length - 1; i >= 0; i--) {
  if (i >= position) {
    newData[i + 1] = newData[i];
    if (i == position) {
      newData[i] = newEl;
    }
  }
}

// Removing element from array
let data1 = [30, 20, 45, 70, 32, 60];
let position1 = 3;
for (i = position1; i < data1.length - 1; i++) {
  data1[i] = data1[i + 1];
}
data1.length = data1.length - 1;

// Searching element in Array
let newData1 = [30, 20, 45, 70, 32, 60];
let item = 70;
let index;
for (i = 0; i < newData1.length; i++) {
  if (newData1[i] == item) {
    index = i;
    break;
  }
}
console.log(newData1[index]);

// Merge two arrays
let array1 = [60, 30, 10, 56, 40];
let array2 = [30, 20, 45, 70, 32, 60];
let array3 = [];
for (i = 0; i < array1.length; i++) {
  array3[i] = array1[i];
}
for (i = 0; i < array2.length; i++) {
  array3[array1.length + 1] = array2[i];
}
console.log(array3);
