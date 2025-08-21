const express = require('express');  // Imports Express.
const router = express.Router();//Creates a router object to define routes separately.
const multer = require('multer');
const LoginController = require('../controllers/loginController');

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });



router.post('/login', LoginController.login);
// router.post('/reg', LoginController.registerUser);
router.post('/reg', upload.single('profile'), LoginController.registerUser);

// router.put('/:id', studentController.updateStudent);
// router.delete('/:id', studentController.deleteStudent);
module.exports = router;// Exports this router to be used in app.js.
