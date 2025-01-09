/*
event loop : in javascript event loop is mechanism which enables non-blocking, asynchronus programming.
it's critical part of javascript runtime environment(like browsers and node.js)
it is responsible for managing the execution of code, handling asynchronus operations and coordinating the tasks

key-concepts - 
1. JS is single threaded -
    js has single call stack, means it can execute only one piece of code at a time.
    howevever it can handle multiple tasks asynchronously, due to event loop
2. Call stack -
    so what exactly call stack is. It is simply the data structure used to track the execution of function calls in JS.
    when a function called, it's pushed into stack. when it returns, it popped off.
3. Web APIs/ Node APIs
    certain operations like setTimeout, http request, or DOM events are delegated to browser (or Node.js) APIs.
    these APIs handles the tasks asynchronously and inform javascript when they are completed
4. Callback Queue (or task Queue)
    this queue holds the callbacks from completed asynchronous operations(eg. setTimeout, fetch, etc)
    these callbacks wait to be added to the call stack for the execution
5. Microtask Queue
    this queue hold task like Promise callbacks(.then, .catch) and mutationObserver tasks.
    Microtask queue prioritise over callback queue




How exactly event loops works? 
    1.Synchronous code execution
        Javascript starts executing code in the call stack. 
        if the call stack is empty, the event loop checks for pending tasks
    2.Handling Asynchronous tasks
        when asynchronous operation encountered, it handed over to the browser or Node.js API to handle
        Once the operation is executed, its callback added into the callback queue(or microtask queue depending on the type)
    3.Event loop prioritization
        event loop first process the tasks in the microtask queue(eg. promise resolution)
        once the MQ is empty, the event loop process the callback Queue
    4.Re-enter the stack
        when the callstack is empty, the event loop pushes tasks from the queues(MQ first, the callback Q) onto the stack for execution
*/

//EVENT LOOP EXample
console.log("Start");

setTimeout(()=>{
    console.log("Timeout callback")
})

Promise.resolve().then(()=>{
    console.log("Promise callback")
})
console.log("End")

/*
Start - synchronous task executed and logged Start
setTimeout - deligated to web/node api the callback is placed in the callback queue
Promis - promise resolved immedietly and it's .then callback placed in microtask queue
End - logged 
event loop process the microtask first , so "Promise callback" is logged
finally the event loop processes the callback queue, so the "Timeout callback" logged

*/





/*
KEY POINTS:

microtask queue(eg.promises) have higher priority than callback queue(eg. setTimeout)
event loop ensures asynchronous tasks don't block the execution of other code
Understanding the event loop is essential for writing efficient and non-blocking JavaScript code.




Web APIs in browsers are responsible for handling tasks like timers, DOM events, fetch requests, and worker threads, all of which can be handled asynchronously through the event loop.
Node.js APIs handle more server-side tasks such as file system operations, HTTP requests, child processes, and events. These APIs rely on the Node.js event loop for asynchronous execution.
*/