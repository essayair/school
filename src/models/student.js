const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const schema = new mongoose.Schema({
    firstName: {
        type: String,
        required:true,
        lowercase: true
    },
    lastName: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true,
        validate: {
            validator: email => !Joi.string().email().validate(email).error,
            msg: "Invalid email format"
        }
    },
    courses: [
        {
            type: String,
            ref: 'Course'
        }
    ]
},

{
    toJSON: {
        virtuals:true,
    }
});

schema.virtual('fullName').get(function () {
    return this.firstName + this.lastName;
})

const model = mongoose.model('Student', schema);

module.exports = model;
