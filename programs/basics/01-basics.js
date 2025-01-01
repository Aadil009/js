//function that takes an array of numbers and returns a new array containing only the even
function evenNumbers(numArray){
    let respArr = []
    for(let i=0; i<numArray.length; i++){
      if(numArray[i]%2===0){
        respArr.push(numArray[i])
      }
    }
    return respArr
  }
  let numArray = [1, 2, 3, 4, 5, 6]
  console.log("Result:", evenNumbers(numArray))

  //functin to return charcter counts of input string in object
  function stringCharCount (inputString) {
    return inputString
    .toLowerCase()
    .replace(/\s/g, '')
    .split('')
    .reduce((i, val)=>{
      i[val] = (i[val] || 0) + 1
      return i
    },{})
      
  }
  console.log(stringCharCount("Hey aadil"))


  