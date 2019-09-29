
console.log('before');
// getUser(function (user) {
//     console.log(user);
//     getRepos(function (repos) {
//         console.log(repos);
//     })
// });


getUser()
    .then(function (users) {
        console.log(users);
        return getRepos(users);
    })
    .then(function (repos) {
        console.log(repos);
    }).catch(function (err) {
        console.log(err.message);
    });

console.log('after');

function getUser() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Reading a user from a database');
            resolve({ 'user': 'abc' });
        }, 2000)
    })
}

function getRepos(users) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            // reject(new Error('Error'));
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000)
    })

}