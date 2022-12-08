// Stack with operations of push and pop
let data = [];
let currentSize = data.length;
let max = 5;
function push(x) {
  if (currentSize >= max) {
    alert("Cannot add in stack");
  }
  data[currentSize] = x;
  currentSize += 1;
}
function pop() {
  if (currentSize > 0) {
    currentSize -= 1;
    data.length = currentSize;
  } else {
    alert("Stack is already empty");
  }
}
push(20);
push(30);
push(40);
pop();
pop();
pop();

console.log(data);

// Reversing array using stack 
let stringArray = [];
let size = stringArray.length;
function push(x) {
  stringArray[size] = x;
  size += 1;
}
function pop() {
  lastRemovedItem = stringArray[size - 1];
  size -= 1;
  stringArray.length = size;
  return lastRemovedItem;
}
function reverseString(item) {
  for (i = 0; i < item.length; i++) {
    push(item[i]);
  }
  for (i = 0; i < item.length; i++) {
    item[i] = pop();
  }
}
let str = "Hamza";
str = str.split("");
reverseString(str);

console.log(stringArray.join(""));
