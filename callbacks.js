
console.log('before');
getUser(function (user) {
    console.log(user);
});
console.log('after');

function getUser(callback) {
    setTimeout(function () {
        console.log('Reading a user from a database');
        callback({ 'user': 'abc' });
    }, 2000)
}