var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var checkschema = new Schema({
    Name: String,
    Telephone: Number,
    Age: Number,
    Gender: Boolean,
    Time: {type: Date, default: Date.now}
});

module.exports= mongoose.model('check', checkschema);