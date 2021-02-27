const { Router } = require('express')

// Создание Router
const router = Router()

// Инициализация контроллера
const controllerProjects = require('../controllers/controllerProjects')

// Получить все записи
router.get('/projects', controllerProjects.list)

// Получить один
router.get('/projects/:id', controllerProjects.show)

module.exports = router