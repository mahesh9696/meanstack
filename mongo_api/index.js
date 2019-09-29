var mongoose = require('mongoose');
var express = require('express');

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// connecting 
mongoose.connect('mongodb://localhost/playground', {
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
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    age: Number
});

// Model
const Course = mongoose.model('course', courseSchema);

// Save
app.post('/courses', async function (req, res) {
    const course = new Course({
        name: req.body.name,
        auther: req.body.auther,
        isPublished: req.body.isPublished,
        age: req.body.age
    });
    var result = await course.save();
    res.send(result);
});

// Update
app.put('/courses/:id', async function (req, res) {
    const result = await Course.findByIdAndUpdate(req.params.id, { name: req.body.name, age: req.body.age }, {
        new: true
    });

    if (!result) return res.status(400).send('course not found');

    res.send(result);
});

// All
app.get('/courses', async function (req, res) {
    const result = await Course.find().sort('name');
    res.send(result);
});

// Single
app.get('/courses/:id', async function (req, res) {
    const result = await Course.findById(req.params.id);

    if (!result) return res.status(400).send('course not found');

    res.send(result);
});

// Delete
app.delete('/courses/:id', async function (req, res) {
    const result = await Course.findByIdAndRemove(req.params.id);

    if (!result) return res.status(400).send('course not found');

    res.send(result);
});

app.listen(3000, function () {
    console.log('Listening on port 3000');
})