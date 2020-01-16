const express = require('express');
const UserController = require('../controllers/user-controllers');
const user_controller = new UserController();
const checkUser = require(`../middleware/validation/common-validation`);
const userSchema = require('../middleware/validation/user-validation');
const checkToken = require('../middleware/auth/auth.js');
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads/");
    }, filename: (req, file, cb) => {
        cb(null, (Date.now() + '.' + file.originalname));
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
const upload = multer({storage: storage, limits: {fileSize: 1024 * 1024 * 5}, fileFilter: fileFilter});


// ImageRouter.route("/uploadmulter").post(upload.single('imageData'),(req,res,next)=>{
//     console.log(req.body)
//     const newImage = new Image({
//         imageName:req.body.imageName,
//         imageData:req.file.path
//     });
//     newImage.save()
//         .then((result) => {
//             console.log(result)
//             res.status(200).json({
//                 success:true,
//                 document:result
//             })
//         })
//         .catch((err)=>next(err))
// })
const router = new express.Router();

// router.get('/:id',checkToken,user_controller.getUser);
// router.post('/',checkUser(userSchema),user_controller.addUser);
router.get('/', checkToken, user_controller.getUser);
router.put('/', checkToken, user_controller.updateUser);
router.delete('/', checkToken, user_controller.deleteUser);
router.post('/uploadImage', checkToken, upload.single('image'), user_controller.updateImage);

module.exports = router;

