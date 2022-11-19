const mongoose = require('mongoose');
const student = new mongoose.Schema({
    name: {
        type:String,
        trim: true,
        required:[true, "What's your name, baby?"],
    },
    year: {
        type:String,
        trim: true,
        required:[true, "What's your year, baby?"]
    },
    major: {
        type:String,
        trim: true,
        required:[true, "What's your major, baby?"],
    },
    greek: {
        type:Boolean, 
    }
});

module.exports = mongoose.model('Student', student);
