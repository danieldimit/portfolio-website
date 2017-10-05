const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
var async = require('async');
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
const Project = db.model(
    'Project',
    new Schema({
        thumbnailLoc: String,
        title: {type: String, required: true},
        buildingType: String,
        template: String,
        content: String,
        works: String,
        investor: String,
        year: String,
        status: String,
        tga: String,
        imgs: [{loc: String}]
    })
);

const RelevantProject = db.model(
    'RelevantProject',
    new Schema({relProjIds: [{id: String}]})
);

const HeroImage = db.model(
    'HeroImage',
    new Schema ({
        title: String,
        subtitle: String,
        imgURL: String
    })
);

//use cors
app.use(cors());

//set static folder
app.use(express.static('/home/freeserver/website-alex/uploads/'));



//routes
app.get('/relevant-projects', function(req, res) {
    res.header('Access-Control-Allow-Origin', req.get('Origin') || '*');

    RelevantProject.find({})
        .then(function(doc) {
            var idArr = [];

            for (var i = 0; i < doc[0].relProjIds.length; i++) {
                idArr[i] = doc[0].relProjIds[i].id;
            }

            async.map(idArr, getThumbnailByID, function(err, results) {
                var returned = [];
                var item;
                for (item of results) {
                    if (typeof item !== 'undefined') {
                        returned.push(item);
                    }
                }
                res.json(returned);
            });


        });
});

function getThumbnailByID(id, callback) {
    Project.find({_id: id}, {thumbnailLoc: 1, buildingType: 1, title: 1}, function(err, doc) {
        if(typeof doc === 'undefined' || err){
            callback(null);
        } else {
            if (doc.length === 0) {
                callback(null);
            } else {
                callback(null, doc[0]);
            }

        }
    });
}

app.get('/heroes', function(req, res) {
    res.header('Access-Control-Allow-Origin', req.get('Origin') || '*');

    HeroImage.find({})
        .then(function(doc) {
            res.json(doc);
        });
});

app.get('/projects', function(req, res) {
    res.header('Access-Control-Allow-Origin', req.get('Origin') || '*');

    Project.find({}, {thumbnailLoc: 1, buildingType: 1, title: 1})
        .then(function(doc) {
            res.json(doc);
        });
});

app.get('/project', function(req, res) {
    res.header('Access-Control-Allow-Origin', req.get('Origin') || '*');
    console.log(req.query.id);
    Project.find({_id: req.query.id})
        .then(function(doc) {
            res.json(doc[0]);
        });
});

//listen
app.listen(port, function() {
    console.log('Server is listening on port ' + port + '!');
});
