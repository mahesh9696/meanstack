
console.log('before');
getUser(function (user) {
    console.log(user);
    getRepos(function (repos) {
        console.log(repos);
    })
});
console.log('after');

function getUser(callback) {
    setTimeout(function () {
        console.log('Reading a user from a database');
        callback({ 'user': 'abc' });
    }, 2000)
}

function getRepos(callback) {
    setTimeout(function () {
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000)
}