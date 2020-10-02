const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String,
    age: Number,
    height: Number});
const User = mongoose.model('User', schema);

module.exports = {
    schema,
    User
}