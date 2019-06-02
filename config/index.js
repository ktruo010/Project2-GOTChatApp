const Sequelize = require('sequelize')

let sqlstr 

if (process.env.NODE_ENV === 'production') {
    sqlstr = process.env.JAWSDB_URL
} else {
    sqlstr = process.env.LOCALDB
}

module.exports = new Sequelize(sqlstr)
