const { Router } = require('express')

// Создание Router
const router = Router()

// Инициализация контроллера
const controllerPosts = require('../controllers/controllerPosts')

// Получить все записи
router.get('/posts', controllerPosts.list)

// Получить один
router.get('/posts/:id', controllerPosts.show)

module.exports = router