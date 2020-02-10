const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    firstName: {
        type: String,
        required:true
    },
    lastName: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    }
},{
    toJSON: {
        virtuals:true,
    }
});

schema.virtual('fullName').get(function () {
    return this.firstName + this.lastName;
})

const model = mongoose.model('Student', schema);

module.exports = model;
