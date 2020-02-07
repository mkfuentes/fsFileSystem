const koder = require('../models/koder')

function create ({ name, gender, email, birthDate }) {
  const newKoder = new koder ({ name, gender, email, birthDate })

  return newKoder.save()
}

function getAll () {
  return koder.find({})
}

function getById (id) {
  return koder.findById(id)
}

function deleteById (id) {
  return koder.findByIdAndDelete(id)
}

function updateById (id, koderInfoToUpdate) {
  return koder.findByIdAndUpdate(id, koderInfoToUpdate)
}

module.exports = {
  create,
  getAll,
  deleteById,
  getById,
  updateById
}