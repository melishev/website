const mongoose  = require('mongoose')
const db        = require('../db')
const Schema    = mongoose.Schema

const Post      = new Schema (
    {
    
    },
    { 
        versionKey: false
    }
)

module.exports = db.appDB.model('posts', Post)