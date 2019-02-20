var express = require('express');
var positions = require('./positions.json')
var qualifications = require('./qualifications.json')

var cors = require('cors');


var app = express();

app.use(express.static(__dirname));
app.use(cors());


app.get('/', (req, res) => {
    res.send(
        `<div>
            <p>positions: <a href="http://localhost:3001/positions">http://localhost:3001/positions</a></p>
            <p>qualifications: <a href="http://localhost:3001/qualifications">http://localhost:3001/qualifications</a></p>
        </div>`
        );
})

app.get('/positions', (req, res) => {
    res.send(positions);
})

app.get('/qualifications', (req, res) => {
    res.send(qualifications);
})


app.use( (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    return next();
})

app.listen(3001);

module.exports = app;