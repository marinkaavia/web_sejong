let myString = "first line, \nsecond line"
let myStringLiteral  = `firsit line
second line`

console.log(myString)
console.log(myStringLiteral)
console.log(myString==myStringLiteral)

// \t \n//character literals

//*******************************************

let headingElement =  `<div>
                        <h1> Web programming</h1>
                        </div>`



let TempD = document.createElement('div')
TempD.innerHTML = headingElement

document.body.appendChild(TempD.firstChild)

//*******************************************

//interpolation 
let value = 3
let exponent = 'second'

let resValue = value + ' to the ' + exponent + ' equals ' + (value*value)
console.log(resValue)
let interpolatedResult = `${value} to the ${exponent} equals ${value*value}`
console.log(interpolatedResult)

//*******************************************
//for in for off

let scorearray = [45,43,59,31]
for (var score in scorearray) { //for in - targeting keys
    console.log(score)
}
for (var score of scorearray) { //for of - targetong values
    console.log(score)
}

//the with statment 
let hostname = location.hostname 
let url = href

with(location) {
    let hostname = hostname
    let url = href
    console.log(url)
}

//*******************************************
//sorting 
let values = [0,3,1,4,2,8]
console.log(values.sort()) //dont work
//*******************************************
//sort2.0

let testarray = [1,2,3]
console.log(testarray.sort((a,b) => a - b))
console.log(testarray.sort((a,b) => b - a))


//*******************************************
//iterative methods
//простое сравнение не дает нам результата пожтому приходится использовать тинтуративные методы чтоы 
//отортировать фккфн 
//чтобы отсторировать фккфн цу орфм у ещтг гу еу фтщерук ьуерщт 

//check iterative methods 

//every number.every() 
//some
//filter
//map

let people = [
    {name: "marina", age: 19},
    {name: "polina", age: 23},
    {name: "anna", age: 10},
    {name: "devushka", age: 28}
]

let peopleinfo =people.map((person, index, array)=> {
    let {name, age} = person;
    let isadoult = age >= 18;
})

