const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'A tour must have a name'],
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(v) {
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    password: {
        type: String,
        minlength: [8, 'A password need to have minimum 8 elements'],
        validate: {
            validator: function(p) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(p);
            },
            message: props => `${props.value} is not a valid password!`
        }
    }
});

const User = mongoose.model('User', schema);

module.exports = User;