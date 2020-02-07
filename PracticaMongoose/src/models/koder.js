const mongoose = require('mongoose')

const koderSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: true,
    trim: true,
    toLowerCase: true
  },
  email: {
    type: String,
    minlength: 5,
    match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
    toLowerCase: true,
    required: true
  },
  birthDate: {
    type: Date,
    required: true
  },
  gender: {
    type:String,
    enum: ['m', 'f', 'n']
  }
})

module.exports = mongoose.model('koders', koderSchema)