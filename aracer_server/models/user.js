const mongoose = require("mongoose");
const schema = mongoose.Schema;
const userSchema = new schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});
module.exports = user = mongoose.model("users", userSchema);