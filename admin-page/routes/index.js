var express = require('express');
var router = express.Router();
var fs = require('fs');
var mongoose = require('mongoose');

mongoose.connect('165.227.144.106:27017/test');
var Schema = mongoose.Schema;

var userDataSchema = new Schema({
    title: {type: String, required: true},
    buildingType: String,
    content: String,
    works: String,
    investor: String,
    year: String,
    status: String,
    tga: String,
    imgs: [{loc: String}]
});

var UserData = mongoose.model('UserData', userDataSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/get-data', function(req, res, next) {
  UserData.find()
      .then(function(doc) {
        res.render('index', {items: doc});
      });
});

router.post('/insert', function(req, res, next) {
    console.log(req.files);
    var savePath = [];

    var i = 0;
    for (var key in req.files) {
        console.log("Key: " + key);
        console.log("Value: " + req.files[key]);

        if(req.files.upfile0){

            var file = req.files[key];
            var name = file.name,
                type = file.mimetype;
            var uploadpath = './public/uploads/' + name;
            savePath[i]= {loc:'./uploads/' + name};
            file.mv(uploadpath,function(err){
                if(err){
                    console.log("File Upload Failed",name,err);
                }
                else {
                    console.log("File Uploaded",name);
                }
            });
            i++;
        };

    }

    var item = new UserData;

    item.title = req.body.title;
    item.buildingType = req.body.buildingType;
    item.content = req.body.content;
    item.works = req.body.works;
    item.investor = req.body.investor;
    item.year = req.body.year;
    item.status = req.body.status;
    item.tga = req.body.tga;

    item.imgs = savePath;
    console.log(savePath);

  item.save();

  res.redirect('/');
});

router.post('/update', function(req, res, next) {
  var id = req.body.id;

  UserData.findById(id, function(err, doc) {
    if (err) {
      console.error('error, no entry found');
    }
    doc.title = req.body.title;
    doc.content = req.body.content;
    doc.author = req.body.author;
    doc.save();
  })
  res.redirect('/');
});

router.post('/delete', function(req, res, next) {

    var id = req.body.id;
    // Delete photos first
    UserData.findById(id)
        .then(function(doc) {
            console.log(doc.imgs.length);
            for (var i = 0; i < doc.imgs.length; i++) {
                fs.unlink("./public/" + doc.imgs[i].loc, (err) => {
                    if (err) console.log('Error - no such directory!');;
                    console.log('successfully deleted /tmp/hello');
                });
            }
        });
    UserData.findByIdAndRemove(id).exec();
    res.redirect('/');
});



module.exports = router;
