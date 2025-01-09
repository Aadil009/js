const worker = new Worker('./worker.js')

worker.postMessage('Start computation')

worker.onmessage = (e) => {
    console.log("Result from the worker", e.data)
}

worker.onerror = (err) => {
    console.log("ERROR :", err.message)
}