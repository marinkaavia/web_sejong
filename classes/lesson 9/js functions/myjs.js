//synaxis
function fillname (firstName, lastNMame) {
    console.log(firstName + " " + lastNMame)
}

//expression = function
let fullname2 = function (firstName, lastNMame) {
    console.log(firstName + " " + lastNMame)
}

//arrow functions 
let fullname3 = (firstName, lastNMame) => {
    console.log(firstName + " " + lastNMame)
}

//doubeling score array values
let scores = [10,20,30,40]
console.log(scores.map((i)=> {
    return i *2
}))

let x = 5;
let double = (x) => {return x*2}
console.log(double)
let freetimes = x => {return x*3}
