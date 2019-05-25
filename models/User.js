const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        index: true,
    },
    password: {
        type: String,
        required: true,
    }
});

var User = module.exports = mongoose.model('users', UserSchema);

module.exports.createUser = function(newUser, callback){
    newUser.save(callback);
}



