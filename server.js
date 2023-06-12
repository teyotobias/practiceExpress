//load express
//require modules
const express = require('express');
const path = require('path');

//require the students database
const studentDb = require('./data/student-db');

//create our express app
const app = express();

//configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));




//define a 'root' route directly on app
app.get('/', function (req,res) {
    res.redirect('/students');
});
//mount middleware (app.use)


//Mount routes
app.get('/students', function(req,res) {
    const students = studentDb.getAll();
    res.render('students/index', {students});

});

//tell app to listen on port 3000
app.listen(3000, function() {
    console.log('Listening on port 3000');
});