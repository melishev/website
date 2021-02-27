const express = require('express')
const db = require('./db')

// Создание express
const app = express()

// Инициализация body-parser ( встроенного в экспресс )
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Вызов роутеров API
const posts = require('./routes/posts')
const projects = require('./routes/projects')

// Использование роутеров
app.use(posts)
app.use(projects)

// Экспорт middleware
module.exports = {
	path: '/api',
	handler: app
}