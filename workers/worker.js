onmessage = (e) => {
    console.log('worker recieved message', e.data)

    let result = 1;
    for(let i = 1; i<=10; i++)
        result *= i;

    postMessage(result)
}