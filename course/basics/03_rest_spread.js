//rest
function login(method, ...options){
    console.log(options)//[ 1, 5, 3, 5, 6 ]
}

login('twitter', 1, 5, 3 , 5, 6)

//spread
var arr1 = [1, 2, 5]
var arr2 = [0, ...arr1]
console.log(arr2)//[ 0, 1, 2, 5 ]

var t1 = [2, 3 ,4]
var t2 = t1
t1[0] = -1
console.log(t1)//[ -1, 3, 4 ]
console.log(t2)//[ -1, 3, 4 ]
//to overcome this issue, we can use spread operator, we can copy whole array and process on it



/* 
Rest operator -  is used to collect multiple elements into an array or obj.
    it is typically used in function arguments or destructuring to gather remaining element

Spread Operator - is used to unpack or spread the elements of an array or object into individual elements
    it is typically used when you want to copy or merge array or objects
*/