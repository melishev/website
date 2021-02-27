const express = require('express')
const { Nuxt, Builder } = require('nuxt')

// Создание express
const app = express()

// Импорт Nuxt.js
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
    // Инициализация Nuxt.js
    const nuxt = new Nuxt(config)

    const { host, port } = nuxt.options.server

    // Сборка в режиме разработчика
    if (config.dev) {
        const builder = new Builder(nuxt)
        await builder.build()
    } else {
        await nuxt.ready()
    }

    // Запуск Nuxt.js через Express
    app.use(nuxt.render)

    // Прослушка сервера
    app.listen(port, host)
}

start()