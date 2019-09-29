const EventEmitter = require('events'); // First letter in upprcase is indicate class


const emitter = new EventEmitter();

// Register a listener

emitter.on('messageLogged', function (args) {  // on is alias of add Listener
    console.log('Listener called', args);
});

emitter.emit('messageLogged', { id: 1, name: 'india' }); // name of the event // To raise event or produce something

