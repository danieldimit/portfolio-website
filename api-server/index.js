const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const app = express();

//load env vars if .env exists
if (fs.existsSync(path.join(__dirname, './.env'))) {
    dotenv.load();
}

if (process.env.MONGO_URI) {
    mongoose.connect(process.env.MONGO_URI);
} else {
    throw new Error('You need an .env file with MONGO_URI defined');
}

//port and views depending on Node Env
var port;
if (process.env.NODE_ENV === 'production') {
    port = process.env.PORT || 3000;
} else {
    port = process.env.DEV_PORT || 3000;
}

//mongo connection etc
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Server is connected to Mongo DB');
});

//get the tweets collection
const UserData = db.model(
    'UserData',
    new Schema({
        title: {type: String, required: true},
        buildingType: String,
        content: String,
        works: String,
        investor: String,
        year: String,
        status: String,
        tga: String,
        imgs: [{loc: String}]
    })
);

//use cors
app.use(cors());

//set static folder
app.use(express.static('/home/freeserver/website-alex/uploads/'));

//routes
app.get('/projects', function(req, res) {
    res.header('Access-Control-Allow-Origin', req.get('Origin') || '*');

    UserData.find({}, {thumbnailLoc: 1, buildingType: 1, title: 1})
        .then(function(doc) {
            res.json(doc);
        });
});

app.get('/project', function(req, res) {
    res.header('Access-Control-Allow-Origin', req.get('Origin') || '*');
    console.log(req.query.id);
    UserData.find({_id: req.query.id})
        .then(function(doc) {
            res.json(doc[0]);
        });
});

//listen
app.listen(port, function() {
    console.log('Server is listening on port ' + port + '!');
});
