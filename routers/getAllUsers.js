const express = require('express');
const UserController = require('../controllers/user-controllers');
const user_controller = new UserController();

const router = new express.Router();

router.get('/', user_controller.getAllUsers);


module.exports = router;

