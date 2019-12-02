const express = require('express');
const UserController = require('../controllers/user-controllers');
const user_controller = new UserController();
const checkUser = require(`../middleware/validation/common-validation`);
const userSchema = require('../middleware/validation/user-validation');
const checkToken  = require('../middleware/auth/auth.js');



const router = new express.Router();

router.get('/:id',checkToken,user_controller.getUser);
router.get('/',checkToken,user_controller.getUser);
router.post('/',checkUser(userSchema),user_controller.addUser);
router.put('/:id',checkToken,user_controller.updateUser);
router.delete('/:id',checkToken,user_controller.deleteUser);

module.exports =router;

