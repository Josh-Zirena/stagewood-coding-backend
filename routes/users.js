const router = require('express').Router();

const { User } = require('../sequelize');

router.get('/', (req, res) => {
    User.findAll({ attributes: ['name', 'email']}).then(users => res.json(users));
});

module.exports = router;