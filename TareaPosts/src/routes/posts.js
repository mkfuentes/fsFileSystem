const express = require('express')
const post = require('../usecases/post')
const router = express.Router()

//GET /koders -> getall()
router.get('/', async (request, response) => {
  //estructura try catch
  try {
  const post = await post.getAll()
  response.json({
    success: true,
    message: 'All posts',
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
router.post('/post', async (request, response) => {
try {
  const newPost = await post.create(request.body)
  response.json({
    success: true,
    message: 'post created',
    data: {
      post: newPost
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
router.get('/post/:id', async (request, response) => {
  try {
    const { id } = request.params
    const postFound = await post.getById(id)
    response.json({
      success: true,
      message: 'post found',
      data: {
        post: postFound
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
router.patch('/post/:id', async (request, response) => {
  try {
    const { id } = request.params
    const info = request.body
    const postUpDated = await post.updateById(id,info)
    response.json({
      success: true,
      message: 'Post updated',
      data: {
        koder: postUpDated
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

router.delete('/post/:id', async (request, response) => {
  try {
    const { id } = request.params
    const postDeleted = await post.deleteById(id)
    response.json({
      success: true,
      message: 'post deleted',
      data: {
        post: postDeleted
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