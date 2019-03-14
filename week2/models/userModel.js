var mongoose = require("mongoose");
var userSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
    }
});
var User = module.exports= mongoose.model("user", userSchema);
