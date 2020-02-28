
const Post = require('../models/post')

function create (postData) {
  return Post.create(postData)
}
function deleteById (id) {
  return Post.findByIdAndDelete(id)
}
function getAll () {
  return Post.find()
}
function getById (id) {
  return Post.findById(id)
}
function updateById (id, dataToUpdate) {
  return Post.findByIdAndUpdate(id, dataToUpdate)
}

module.exports = {
  create,
  deleteById,
  getAll,
  getById,
  updateById
}
