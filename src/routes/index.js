var express = require('express');
var router = express.Router();

const authCtrl = require('../controllers/authController');
const userCtrl = require('../controllers/userController')
const nickCtrl = require('../controllers/nickController');
const vc = require('../controllers/validationController');
const { checkSchema } = require('express-validator');

//test
router.get('/yo', userCtrl.helloWorld);
router.get('/error', nickCtrl.helloError);

// login for users
router.post('/login', vc.chkStr('username'), vc.chkStr('password'), vc.validate, authCtrl.login);



// !! secure routes for website must be places below !!
router.use(authCtrl.authorize);


// !! ONLY admin routes below !!
router.use(authCtrl.adminOnly);


module.exports = router;