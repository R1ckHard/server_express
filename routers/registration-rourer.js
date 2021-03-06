const express = require('express');
const UserController = require('../controllers/user-controllers');
const user_controller = new UserController();
const checkUser = require(`../middleware/validation/common-validation`);
const userSchema = require('../middleware/validation/user-validation');
const checkToken  = require('../middleware/auth/auth.js');

const router = new express.Router();

router.post('/',checkUser(userSchema),user_controller.addUser);
module.exports =router;
