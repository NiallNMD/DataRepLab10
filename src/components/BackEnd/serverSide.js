//including express library
const express = require('express');
const app = express();
const port = 4000;
const bodyParser = require('body-parser'); //Get information from HTTP 
const mongoose = require('mongoose');
const path = require('path');

//Allow CORS requests
const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Using Build folder to combine both server/front end
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//mongoose connection to the mongodb server from client
const ConnectionString = "mongodb+srv://admin:galway@cluster0.u4iw7.mongodb.net/posts?retryWrites=true&w=majority"; //Edit this with other mongodb link for Posts
// mongodb+srv://admin:<password>@cluster0.u4iw7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(ConnectionString, { useNewUrlParser: true });

const Schema = mongoose.Schema;
//Mongoose schema
var EntrySchema = new Schema(
    {
        postName: String,
        postDate: String,
        postEssay: String
    });

var PostModel = mongoose.model("post", EntrySchema);

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
app.post('/api/posts', (req, res) => {
    res.send('Data Received');
    console.log(req.body);
    console.log(req.body.postName);
    console.log(req.body.postDate);
    console.log(req.body.postEssay + "here 2");
    //Mongoose - sending items to server
    PostModel.create(
        {
            postName: req.body.postName,
            postDate: req.body.postDate,
            postEssay: req.body.postEssay
        })
})

//passing JSON through
app.get('/api/posts', (req, res) => {
    
    //Getting movie data from the server instead of hard coding it
    PostModel.find((err, data) => {
        res.json(data);
    })
})
//Searching for the wanted movie via the search bar
app.get('/api/posts/:id', (req, res) => {
    console.log(req.params.id);

    PostModel.findById(req.params.id, (err, data) => {
        res.json(data);
    })
})
app.put('/api/posts/:id', (req, res) => {
    console.log("Updating: " + req.params.id);

    PostModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (err, data) => { res.send(data) });
});

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

//delete post from id put into search bar
app.delete('/api/posts/:id', (req, res) => {
    console.log("Delete Post: " + req.params.id);
    //when deleted send back the data to the client.
    PostModel.findByIdAndDelete(req.params.id, (err, data) => {
        res.send(data);
    });
})

//any other URL will send index html from BUILD
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../build/index.html'));
});

//Listening to HTTP requests, once in will execute.
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})

