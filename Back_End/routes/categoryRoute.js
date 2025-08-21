// routes/categoryRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const category = require('../controllers/categoryController');
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });
router.post('/add', upload.single('catphoto'), category.addCategory);
router.get('/getdata', category.getCategory);
router.get('/:id', category.getcatinfo);
// router.put('/update/:id', upload.single('profile'), category.updateUser);
// router.delete('/delete/:id', category.deleteUser);

module.exports = router;

