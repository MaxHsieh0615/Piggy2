const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');

//Display sign in page and register page
router.get('/signin', function (req, res) {
    res.render('signIn')
});
router.get('/register', function (req, res) {
    res.render('signUp')
});

module.exports = router;