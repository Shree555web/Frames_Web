const express = require('express');  // Imports Express.
const router = express.Router();//Creates a router object to define routes separately.
const studentController = require('../controllers/studentController');
router.post('/add', studentController.addStudent);
router.get('/:id', studentController.getStudentById);
router.put('/:id', studentController.updateStudent);
router.delete('/:id', studentController.deleteStudent);
module.exports = router;// Exports this router to be used in app.js.