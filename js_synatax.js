let text1 = "What a very ";
text1 += "nice day"; //What a very nice day
let x11 = 5 + 5;//10
let y12 = "5" + 5; //55
let z12 = "Hello" + 5;//Hello5

// Booleans
let x1 = true;
let y1 = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

// Function is called, the return value will end up in x
let x = myFunction(4, 3);

function myFunction(a, b) {
// Function returns the product of a and b
  return a * b;
}

for (let step = 0; step < 5; step++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log("Walking east one step");
  }

  function countSelected(selectObject) {
    let numberSelected = 0;
    for (let i = 0; i < selectObject.options.length; i++) {
      if (selectObject.options[i].selected) {
        numberSelected++;
      }
    }
    return numberSelected;
  }
  
  const btn = document.getElementById("btn");
  
  btn.addEventListener("click", () => {
    const musicTypes = document.selectForm.musicTypes;
    console.log(`You have selected ${countSelected(musicTypes)} option(s).`);
  });

  let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}

let x = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log("Outer loops:", x);
  x += 1;
  z = 1;
  while (true) {
    console.log("Inner loops:", z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}

let x = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log("Outer loops:", x);
  x += 1;
  z = 1;
  while (true) {
    console.log("Inner loops:", z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}

let arr1 = [1,2,3];
arr.push(10, 11);
arr.push(100);
console.log(arr); //[1,2,3,10,11,100]

//unshift() method is used to add new items from the beginning of the array. Here also you should pass new items as an argument of the method.
let arr2 = [1,2,3];
arr.unshift(10, 11);
arr.unshift(100);
console.log(arr); //[100, 10, 11, 1, 2, 3]

//pop() method is used to remove the last item of an array.
let arr3 = [1,2,3];
arr.pop();
console.log(arr); //[1,2]
shift() 
//method is used to remove the first item of an array. After removal of the first item all items are shifted forward and their index change respectively.
let arr = [1,2,3];
arr.shift();
console.log(arr); //[2,3]