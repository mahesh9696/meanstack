
console.log('before');
var user = getUser(); // how can we get user here -- callbacks, promises and aync/await
console.log(user);
console.log('after');

function getUser() {
    setTimeout(function () {
        console.log('Reading a user from a database');
        return { 'user': 'abc' }
    }, 2000)
}