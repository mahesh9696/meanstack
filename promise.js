const p = new Promise(function (resolve, reject) {
    resolve(1); // pending => resolved, fullfilled
    reject(new Error('Error')); // Pending to Rejected
})

p.then(function(result) {
    console.log(result);
}).catch(function(err) {
    console.log(err.message)
})