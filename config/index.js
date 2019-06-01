const Sequelize = require('sequelize')

if (process.env.NODE_ENV === 'production') {
    sqlstr = process.env.JAWSDB_URL
} else {
    sqlstr = process.env.LOCALDB
}

module.exports = new Sequelize(sqlstr)
