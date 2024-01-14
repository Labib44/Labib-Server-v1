
const mongoose = require('mongoose');

// Schema Design
const projecttSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please, Provide a name for this project."],
        trim: true,
        unique: [true, "Name must be unique."],
        minLength: [3, "Name must be at least 3 characters."],
        maxLength: [50, "Name is too large"],
    },
    title: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        required: true,
    },
    live: {
        type: String,
        required: true,
    },
    technology: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },



}, {
    timestamps: true,
})


// Mongooes middelware for saving data: pre / post

// // pre method
// projecttSchema.pre('save', function (next) {
//     console.log('Before saving data');
//     if (this.quantity == 0) {
//         this.status = 'Out-of-stock'
//     }
//     next()
// })




// Model
const Project = mongoose.model('Project', projecttSchema)

module.exports = Project;