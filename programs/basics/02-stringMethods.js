//toLowercase touppercase
function caseStr(input){
    console.log(input.toLowerCase())
    console.log(input.toUpperCase())

}
caseStr("Hello World")

//trim - to remove white spaces from both ends of a string

function trimEx(input){
    console.log(input.trim())
}
trimEx("    Hey aadil   ")


//includess
function includesEx(input){
    console.log(input.includes('world'))
}

includesEx("Hello world")

//split example

function splitEx(input){
    console.log(input.split('A'))
}
splitEx("Hey Aadil")

//replaceExample
function replaceEx(input){
    console.log(input.replace('Aadil', 'World'))
}
replaceEx('Hello Aadil')

//charAt
function charAtEx(input){
    console.log('char at 2nd position is :', input.charAt(1))
}
charAtEx('world')