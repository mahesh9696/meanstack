console.log('before');
// getUser()
//     .then(function (users) {
//         console.log(users);
//         return getRepos(users);
//     })
//     .then(function (repos) {
//         console.log(repos);
//     }).catch(function (err) {
//         console.log(err.message);
//     });

async function displayRepo() {
    try {
        const user = await getUser();
        const repos = await getRepos();
        console.log(repos);
    } catch (error) {
        console.log(error.message);
    }
}
displayRepo();
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
            console.log('Reading a repos from a database');
           // reject(new Error('Error'));
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000)
    })

}