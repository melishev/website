const mongoose  = require('mongoose')
const db        = require('../db')
const Schema    = mongoose.Schema

const Project   = new Schema (
    {
    
    },
    { 
        versionKey: false
    }
)

module.exports = db.appDB.model('projects', Project)