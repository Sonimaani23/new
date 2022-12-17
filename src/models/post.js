const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
    name : String,
    location : String,
    description : String,
    PostImage : String,
    date : Date,
    like : Number
});

module.exports = mongoose.model('Post',Post);