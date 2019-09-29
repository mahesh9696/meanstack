const p1 = new Promise(function (resolve, rject) {
    setTimeout(function () {
        console.log('calling Facebook api');
        resolve(1)
    }, 2000)
})

const p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('calling Twitter api');
        resolve(2)
    }, 1000)
})

Promise.all([p1, p2]).then(function (result) {
    console.log(result);
}).catch(function (error) {
    console.log(error);
})