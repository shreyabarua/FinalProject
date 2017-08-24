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

var urlstring = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || process.envMONGOLAB_CHARCOAL_URI;
var port = process.env.port || 5000;

mongoose.connect(urlstring, function(err, res){
  if (err){
    console.log("ERROR conncting to " + urlstring + "." + err);
  }

  else {
    console.log('Connected to  ' + urlstring);
  }
});
