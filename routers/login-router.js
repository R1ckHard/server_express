const express = require('express');
const loginControllers = require('../controllers/login-conrollers');
const checkToken  = require('../middleware/auth/auth.js');


const loginController = new loginControllers();

const router = new express.Router();

router.post('/',loginController.signUp);

module.exports =router;
