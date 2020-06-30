const Sequelize = require('sequelize')

const { dev } = require('./config/config');
const UserModel = require('./models/user')

const sequelize = new Sequelize(dev.database, dev.username, dev.password, {
  host: dev.host,
  dialect: dev.dialect
});

const User = UserModel(sequelize, Sequelize)

sequelize.sync({ force: false })
  .then(() => {
    console.log(`Database & tables created!`)
  })

module.exports = {
  User
}
