const mongoose = require("mongoose");


const postSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    location: {
        type: String,

    },
    date: {
        type: String
    },
    slots: {
        type: Number
    },
    fees: {
        type: Number
    }
}, {
    versionKey: false
});


const PostModel = mongoose.model("hospital", postSchema)
module.exports = {
    PostModel
}