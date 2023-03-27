const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('mainpag');
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/Dermatologos', (req, res) => {
    res.render('Dermatologos');
});

router.get('/Fisios', (req, res) => {
    res.render('Fisios');
});

router.get('/NosotrosInfo', (req, res) => {
    res.render('Page_NosotrosInfo');
});

router.get('/Formulario', (req, res) => {
    res.render('Formulario');
});

module.exports = router;