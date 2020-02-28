const express = require('express')
const post = require('../usecases/post')
const auth = require('../middlewares/auth')

const router = express.Router()

router.use(auth)

router.get('/', async (request, response) => {
  try {
    const allPosts = await post.getAll()
    response.json({
      success: true,
      message: 'all posts',
      data: {
        posts: allPosts
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const postFound = await post.getById(id)
    response.json({
      success: true,
      message: 'Post found',
      data: {
        posts: postFound
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

router.post('/', async (request, response) => {
  try {
    const postCreated = await post.create(request.body)
    response.json({
      success: true,
      message: 'Post created',
      data: {
        posts: postCreated
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const postDeleted = await post.deleteById(id)
    response.json({
      success: true,
      message: 'Post deleted',
      data: {
        posts: postDeleted
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const postUpdated = await post.updateById(id)
    response.json({
      success: true,
      message: 'Post updated',
      data: {
        posts: postUpdated
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

module.exports = router
