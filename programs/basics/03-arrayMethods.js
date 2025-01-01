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