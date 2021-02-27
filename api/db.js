const mongoose = require('mongoose')

// Создаем подключение к MongoDB приложения
let appDB = mongoose.createConnection( 'mongodb+srv://MongoTest:booKXBXLsXtPiZvc@cluster0.iuyok.mongodb.net/MelishevDB?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }
)

// Проверяем подключение к БД приложения
appDB.on('error', console.error.bind(console, 'Ошибка в подключении к MongoDB Application: '))
appDB.once('open', function callback () {
    console.log("MongoDB Application Подключен...");
});

module.exports.appDB = appDB