const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    maxLength: 100,
    minLength: 1,
    required: true,
    trim: true
  },
  author: {
    type: String,
    minLength: 3,
    required: true,
    trim: true,
    maxLength: 20
  },
  dateCreated: {
    type: Date,
    default: new Date()
  },
  readingTime: {
    type: Number,
    min: 1,
    required: true
  },
  imageUrl: {
    type: String,
    minLength: 5,
    maxLength: 500
  },
  description: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 128
  }
})

module.exports = mongoose.model('Posts', postSchema)
