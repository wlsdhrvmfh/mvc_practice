const mongoose = require('mongoose');
const {Schema} = mongoose;

const schema = new Schema({

    memberNo: Number,
    name: String,
    year: Number,
    semester: String,
    room: String,
    team: Number
    
}, {collection: 'info'});

module.exports = schema;


