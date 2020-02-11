const post = require('../models/post')

function create ({title, author, date, readTime, image}) {
  const newPost = new post ({ title, author, date, readTime, image })
  return newPost.save()
}

function getAll () {
  return post.find({})
}

function getById (id) {
  return post.findById(id)
}

function deleteById (id) {
  return post.findByIdAndDelete(id)
}

function updateById (id, postInfoToUpdate) {
  return post.findByIdAndUpdate(id, postInfoToUpdate)
}

module.exports = {
  create,
  getAll,
  deleteById,
  getById,
  updateById
}