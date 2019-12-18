const express = require('express');
const MyPageController = require('../controllers/myPage-controllers');
const myPageController = new MyPageController();
const checkToken  = require('../middleware/auth/auth.js');



const router = new express.Router();

router.get('/',checkToken,myPageController.myPage);


module.exports =router;
