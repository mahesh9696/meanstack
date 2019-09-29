const EventEmitter = require('events'); // First letter in upprcase is indicate class


const emitter = new EventEmitter();

// Register a listener

emitter.on('messageLogged',function() {  // on is alias of add Listener
    console.log('Listener called');
});

emitter.emit('messageLogged'); // name of the event // To raise event or produce something