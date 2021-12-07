const mongoose = require("mongoose")

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        unique: true,
        trim: true,
        maxlength: [40, 'Title can not be more than 40 chracters']
    },
    description: {
        type: String,
        required: true,
        maxlength: [200, 'Description can not be more than 200 chracters']
    }
})

module.exports = mongoose.models.note || mongoose.model('note', NoteSchema)

