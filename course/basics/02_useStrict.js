'use strict'
var test = 1
tst = 3
console.log(tst)
//ReferenceError: tst is not defined
//above code will work well and output 3 if 'use stict' removed
eval('var my = "Aadil"')
console.log(my)
//ReferenceError: my is not defined if use strict mode is on



//In Javascript variables with primitive data types like string, number , boolean etc, it are passed by value
//objects by reference