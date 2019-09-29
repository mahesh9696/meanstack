var express = require('express');
var app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.use(function(req,res,next) {
    console.log('Logging....');
    next();
    // res.end();
});

const customers = [
    { id: 1, name: 'customer1' },
    { id: 2, name: 'customer2' },
    { id: 3, name: 'customer3' }
]

app.get('/', function (req, res) {
    res.send('Hello World1');
});


app.get('/api/customers', function (req, res) {
    res.send(customers);
});

app.get('/api/customers/:id', function (req, res) {
    var customer = customers.find(function (customer) {
        return customer.id == parseInt(req.params.id);
    })
    if (customer) {
        res.send(customer);
    } else {
        res.status(400).send('The customer with given id was not found');
    }
});

app.post('/api/customers', function (req, res) {
    const customer = {
        id: customers.length + 1,
        name: req.body.name
    };
    customers.push(customer);
    res.send(customer);
});

app.put('/api/customers/:id', function (req, res) {
    var customer = customers.find(function (customer) {
        return customer.id == parseInt(req.params.id);
    })
    if (customer) {
        customer.name = req.body.name;
        res.send(customer);
    } else {
        res.status(400).send('The customer with given id was not found');
    }
});

app.delete('/api/customers/:id', function (req, res) {
    var customer = customers.find(function (customer) {
        return customer.id == parseInt(req.params.id);
    })
    if (customer) {
        const index = customers.indexOf(customer);
        customers.splice(index, 1);
        customer.name = req.body.name;
        res.send(customer);
    } else {
        res.status(400).send('The customer with given id was not found');
    }
});


// req has lots of properties visit express site

app.listen(3000, function () {
    console.log("Listening on port 3000...");
});
