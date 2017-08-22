/**
 * Created by Kristen on 8/17/17.
 */
var mongoose = require("mongoose");

const Post = new mongoose.Schema({
    name: String,
    location: String,
    title: String,
    entry: String,
    date: String
});

mongoose.model("Post", Post);
mongoose.connect('mongodb://localhost/GWC')
