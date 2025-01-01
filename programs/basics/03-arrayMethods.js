let arrVar = [1, 3, 4, 5]
//push
const pushEx = (input) => {
    input.push(9)
    console.log(input)
}
pushEx(arrVar)


//pop
function popEx (input){
    input.pop()
    console.log(input)
}
popEx(arrVar)

//shift : removes first elem of an array

function shiftEx( input) {
    input.shift()
    console.log(input)
}

shiftEx(arrVar)

//unshift : adds new element at the start of an array
const unshiftEx = (input) => {
    input.unshift(100)
    console.log(input)
}
unshiftEx(arrVar)

//map creates new array by transforming each element

const mapEx =(input)=>{
    return input.map((val)=> val*2)
}
console.log(mapEx(arrVar))

//filter: filters the array based on conditions

const filterEx=(input)=>{
    return input.filter((val) => {if(val>=2) return val})
}

console.log('filter:',filterEx([1,2,3,4]))

function filterEx2 (input){
    console.log( input.filter((val) => val%2===0))
}
filterEx2([1,2,3,4,5,6])

//reduce - reduce an array to single value

function reduce (input) {
    console.log("reduce:", input.reduce((a,b)=>a*b))
}
reduce([2,3,4,5])

const reduceEx=(input)=>
{
    let res ={}
    return input.reduce((a,b)=>{
        console.log("==>",a,"-", b)
        return a>b ? a : b
    })
}
console.log(reduceEx([2,6,3,9,10,5]))


//find - used to return first found element
const findExample =(input)=>{
    return input.find((val)=>val===4)
}
console.log(findExample([1,2,3,4,5,6,4]))

//sort
function sortEx(input){
    console.log("sorted:", input.sort())
}
sortEx([8,3,5,1])


function problem1(input){
    return input
    .split(',')
    .map((val)=>parseInt(val))
    .filter((val)=>val%2!==0)
    .reduce((a,b)=>a+b)
}
console.log(problem1('1,2,3,4,5'))