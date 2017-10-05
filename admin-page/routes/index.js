var express = require('express');
var router = express.Router();
var fs = require('fs');
var mongoose = require('mongoose');

mongoose.connect('127.0.0.1:27017/test');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
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
});

var relevantProjectsSchema = new Schema({relProjIds: [{id: String}]});

var heroImageSchema = new Schema ({
    title: String,
    subtitle: String,
    imgURL: String
});

var Project = mongoose.model('Project', projectSchema);
var RelevantProject = mongoose.model('RelevantProject', relevantProjectsSchema);
var HeroImage = mongoose.model('HeroImage', heroImageSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/get-data', function(req, res, next) {
    Project.find()
      .then(function(doc) {
        res.render('index', {items: doc});
      });
});

router.get('/get-relevant-projects', function(req, res, next) {
    RelevantProject.find()
        .then(function(doc) {
            res.render('index', doc[0]);
        });
});

router.get('/get-hero-images', function(req, res, next) {
    HeroImage.find()
        .then(function(doc) {
            res.render('index', {heroes: doc});
        });
});

router.post('/insert-hero-image', function(req, res, next) {
    var imgPath;

    if(req.files.upHero){

        var file = req.files.upHero;
        var name = file.name,
            type = file.mimetype;
        var uploadpath = '/home/freeserver/website-alex/uploads/imgs/heroes/' + name;
        var nameAddition = '';
        var fileExists = true;

        while (fileExists) {
            if (fs.existsSync(uploadpath)) {
                nameAddition = makeid();
                uploadpath = '/home/freeserver/website-alex/uploads/imgs/heroes/' + nameAddition + name;
            } else {
                fileExists = false;
                imgPath= '/imgs/heroes/' + nameAddition + name;
                file.mv(uploadpath,function(err){
                    if(err){
                        console.log("File Upload Failed",name,err);
                    }
                    else {
                        console.log("File Uploaded",name);
                    }
                });
            }
        }
    };



    var item = new HeroImage;

    item.imgURL = imgPath;
    item.title = req.body.title;
    item.subtitle = req.body.subtitle;

    item.save();

    res.redirect('/get-data');
});

router.post('/set-relevant-projects', function(req, res, next) {
    // Remove all relevant projects
    RelevantProject.remove({}, function(err) {
            if (err) {
                console.log(err)
            } else {
                // Add the new values
                var relevantProjectsIds = [];

                var item = new RelevantProject;
                console.log(req.body.id0);
                relevantProjectsIds[0] = {id: (req.body.id0)};
                relevantProjectsIds[1] = {id: (req.body.id1)};
                relevantProjectsIds[2] = {id: (req.body.id2)};
                relevantProjectsIds[3] = {id: (req.body.id3)};
                relevantProjectsIds[4] = {id: (req.body.id4)};
                relevantProjectsIds[5] = {id: (req.body.id5)};
                console.log(relevantProjectsIds);
                item.relProjIds = relevantProjectsIds;
                console.log("ITEM:::::::::::::::::: ",item.relProjIds);
                item.save();

                res.redirect('/get-data');
            }
        }
    );


});


router.post('/insert', function(req, res, next) {
    console.log(req.files);
    var thumbnailPath;
    var savePath = [];

    if(req.files.thumbnail){

        var file = req.files.thumbnail;
        var name = file.name,
            type = file.mimetype;
        var uploadpath = '/home/freeserver/website-alex/uploads/imgs/thumbnails/' + name;
        var nameAddition = '';
        var fileExists = true;

        while (fileExists) {
            if (fs.existsSync(uploadpath)) {
                nameAddition = makeid();
                uploadpath = '/home/freeserver/website-alex/uploads/imgs/thumbnails/' + nameAddition + name;
            } else {
                fileExists = false;
                uploadpath = '/home/freeserver/website-alex/uploads/imgs/thumbnails/' + nameAddition + name;
                thumbnailPath= '/imgs/thumbnails/' + nameAddition + name;
                console.log(thumbnailPath);
                file.mv(uploadpath,function(err){
                    if(err){
                        console.log("File Upload Failed",name,err);
                    }
                    else {
                        console.log("File Uploaded",name);
                    }
                });
            }
        }
    };

    var i = 0;
    for (var key in req.files) {

        if(key != 'thumbnail' && req.files[key]){

            var file = req.files[key];
            var name = file.name,
                type = file.mimetype;
            var uploadpath = '/home/freeserver/website-alex/uploads/imgs/' + name;

            nameAddition = '';
            fileExists = true;


            while (fileExists) {
                console.log("stuck>>>>>>>, uploadpath ", uploadpath);
                if (fs.existsSync(uploadpath)) {
                    nameAddition = makeid();
                    uploadpath = '/home/freeserver/website-alex/uploads/imgs/' + nameAddition + name;
                } else {
                    fileExists = false;
                    uploadpath = '/home/freeserver/website-alex/uploads/imgs/' + nameAddition + name;
                    savePath[i]= {loc: '/imgs/' + nameAddition + name};
                    file.mv(uploadpath, function(err){
                        if(err){
                            console.log("File Upload Failed", name, err);
                        }
                        else {
                            console.log("File Uploaded", name);
                        }
                    });
                    i++;
                }
            }

        };

    }

    var item = new Project;

    item.thumbnailLoc = thumbnailPath;
    item.title = req.body.title;
    item.buildingType = req.body.buildingType;
    item.template = req.body.template;
    item.content = req.body.content;
    item.works = req.body.works;
    item.investor = req.body.investor;
    item.year = req.body.year;
    item.status = req.body.status;
    item.tga = req.body.tga;

    item.imgs = savePath;

    item.save();

    res.redirect('/get-data');

});

router.post('/update', function(req, res, next) {
  var id = req.body.id;

    Project.findById(id, function(err, doc) {
    if (err) {
      console.error('error, no entry found');
    }
    doc.title = req.body.title;
    doc.content = req.body.content;
    doc.save();
  })
  res.redirect('/');
});

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}


router.post('/delete-hero-image', function(req, res, next) {

    var id = req.body.id;
    // Delete photos first
    HeroImage.findById(id)
        .then(function(doc) {

            fs.unlink("/home/freeserver/website-alex/uploads/" + doc.imgURL, (err) => {
                if (err) console.log('Error - no such directory!');
                console.log('successfully deleted hero image');
            });
        });
    HeroImage.findByIdAndRemove(id).exec();
    res.redirect('/');
});

router.post('/delete', function(req, res, next) {

    var id = req.body.id;
    // Delete photos first
    Project.findById(id)
        .then(function(doc) {

            fs.unlink("/home/freeserver/website-alex/uploads/" + doc.thumbnailLoc, (err) => {
                if (err) console.log('Error - no such directory!');
                console.log('successfully deleted thumbnail');
            });

            for (var i = 0; i < doc.imgs.length; i++) {
                fs.unlink("/home/freeserver/website-alex/uploads/" + doc.imgs[i].loc, (err) => {
                    if (err) console.log('Error - no such directory!');
                    console.log('successfully deleted pic');
                });
            }
        });
    Project.findByIdAndRemove(id).exec();
    res.redirect('/');
});



module.exports = router;
