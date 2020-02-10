const express = require('express')
const koder = require('../usecases/koder')
const router = express.Router()

//GET /koders -> getall()
router.get('/', async (request, response) => {
  //estructura try catch
  try {
  const koders = await koder.getAll()
  response.json({
    success: true,
    message: 'All koders',
    data: {
      koders
    }
  })
} catch(error){
  response.status(400)
  response.json({
    success:false,
    message:error.message
  })
}
})

// POST objetivo crear un koder
router.post('/', async (request, response) => {
try {
  const newKoder = await koder.create(request.body)
  response.json({
    success: true,
    message: 'Koder created',
    data: {
      koder: newKoder
    }
  })
} catch(error){
  response.status(400)
  response.json({
    success:false,
    message:error.message
  })
}
})

//getById
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const koderFound = await koder.getById(id)
    response.json({
      success: true,
      message: 'Koder found',
      data: {
        koder: koderFound
      }
    })
  } catch(error){
    response.status(400)
    response.json({
      success:false,
      message:error.message
    })
  }
  })

//update
router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const info = request.body
    const koderUpDated = await koder.updateById(id,info)
    response.json({
      success: true,
      message: 'Koder updated',
      data: {
        koder: koderUpDated
      }
    })
  } catch(error){
    response.status(400)
    response.json({
      success:false,
      message:error.message
    })
  }
  })

//delete

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const koderDeleted = await koder.deleteById(id)
    response.json({
      success: true,
      message: 'Koder deleted',
      data: {
        koder: koderDeleted
      }
    })
  } catch(error){
    response.status(400)
    response.json({
      success:false,
      message:error.message
    })
  }
  })


module.exports = router