var mongoose = require('mongoose');
var express = require('express');

var app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// connecting 
mongoose.connect('mongodb://localhost/meanstack', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(function () {
        console.log('Connected to mongodb...');
    })
    .catch(function (err) {
        console.error('Connection error', err);
    });

// Schema
const employeeSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email_id: String,
    active: Boolean
});

// Model
const Employee = mongoose.model('employee', employeeSchema);

// Save
app.post('/employees', async function (req, res) {
    const employee = new Employee({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email_id: req.body.email_id,
        active: req.body.active
    });
    var result = await employee.save();
    res.send(result);
});

// Update
app.put('/employees/:id', async function (req, res) {
    const result = await Employee.findByIdAndUpdate(req.params.id, { first_name: req.body.first_name, last_name: req.body.last_name }, {
        new: true
    });

    if (!result) return res.status(400).send('employee not found');

    res.send(result);
});

// All
app.get('/employees', async function (req, res) {
    const result = await Employee.find().sort('first_name');
    res.send(result);
});

// Single
app.get('/employees/:id', async function (req, res) {
    const result = await Employee.findById(req.params.id);

    if (!result) return res.status(400).send('employee not found');

    res.send(result);
});

// Delete
app.delete('/employees/:id', async function (req, res) {
    const result = await Employee.findByIdAndRemove(req.params.id);

    if (!result) return res.status(400).send('employee not found');

    res.send(result);
});

app.listen(3000, function () {
    console.log('Listening on port 3000');
})