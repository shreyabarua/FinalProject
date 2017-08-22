/**
 * Created by Kristen on 8/17/17.
 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const hbs = require("hbs");

app.set('views', __dirname);
app.set('view engine', 'hbs');

require('./db');

const Post = mongoose.model("Post");

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/finalproject.html')
});

app.get('/blog', function(req, res) {
    Post.find({}, function(err, posts) {
        posts.reverse();
        res.render('blog', {posts: posts});
    });
});

app.post('/blog', function(req, res) {
    // You can modify the date to be the format you want
    const date = (new Date()).toString();

    const p = new Post({
        name: req.body.name,
        location: req.body.location,
        title: req.body.title,
        entry: req.body.entry,
        date: date
    });

    p.save(function (err) {
        if(err) {
            console.log(err);
        }

        res.redirect('/blog');
    });
});

app.listen(3000);
