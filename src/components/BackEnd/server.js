
//including express library
const express = require('express');
const app = express();
const port = 4000;
const bodyParser = require('body-parser'); //Get information from HTTP 

//Allow CORS requests
const cors = require('cors');
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//Waiting for a get method to execute, '/' is URL its coming from 
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying');
})

app.get('/whatever', (req, res) => { res.send('Hi') });

//passing a parameter through to the URL
app.get('/hello/:name', (req, res) => {
    res.send('Hello ' + req.params.name);
})

//listening for POST method
app.post('/api/movies', (req, res) => {
    res.send('Data Received');
    console.log(req.body);
    console.log(req.body.Title);
    console.log(req.body.Year);
    console.log(req.body.Poster);
})


//passing JSON through
app.get('/api/movies', (req, res) => {
    const movies = [
        
            {
                "Title": "Avengers: Infinity War",
                "Year": "2018",
                "imdbID": "tt4154756",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
            },
            {
                "Title": "Captain America: Civil War",
                "Year": "2016",
                "imdbID": "tt3498820",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
            },
            {
                "Title": "World War Z",
                "Year": "2013",
                "imdbID": "tt0816711",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
            },
            {
                "Title": "War of the Worlds",
                "Year": "2005",
                "imdbID": "tt0407304",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg"
            }
        ]
    
    //showing it json so it is displayed
    res.status(200).json({
        mymovies: movies,
        'message': 'Data Sent'
    })
})

//passing a file through to the URL - browser does majority of work and hides html tags etc.
app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

//Getting input from HTML form and pass it into a request
app.get('/name', (req, res) => {
    res.send('Hello ' + " " + req.query.firstname + " " + req.query.lastname);
})

//Getting from POST method - more secure and can get more data than from URL
app.post('/name', (req, res) => {
    res.send('Goodbye ' + req.body.firstname + ' ' + req.body.lastname);
})
//Listening to HTTP requests, once in will execute.
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})

