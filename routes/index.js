var express = require('express');
var expressValidator = require('express-validator');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/User');

var router = express.Router();
router.use(expressValidator());

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});
router.get('/signup', function (req, res, next) {
    res.render('signup');
});
router.get('/signin', function (req, res, next) {
    res.render('signin');
});
router.get('/profile', function (req, res, next) {
    res.render('profile');
});

router.post('/signup', function (req, res, next) {
    const { username, password } = req.body;

    req.checkBody('username', 'Name file is not require').notEmpty();
    req.checkBody('password', 'Name file is not require').notEmpty();
    var err = req.validationErrors();
    if (err) {
        res.location('/signup')
        res.render('signup');
    } else {
        var newUser = new User({ username, password });
        User.createUser(newUser, (user, err) => {
            if (err) throw err;
            console.log(user);
        });
        res.location('/profile')
        res.render('profile');
    }
});

router.post('/login',
    passport.authenticate('local', { failureRedirect: '/users/login', }),
    (req, res) => {
        res.send({ success: true });
    });



module.exports = router;
