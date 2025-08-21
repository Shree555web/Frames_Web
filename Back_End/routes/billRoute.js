const express = require('express');  // Imports Express.
const router = express.Router();//Creates a router object to define routes separately.
const BillController = require('../controllers/billController');
router.post('/', BillController.addBill);
// router.get('/:id', studentController.getStudentById);
// router.put('/:id', studentController.updateStudent);
// router.delete('/:id', studentController.deleteStudent);
module.exports = router;// Exports this router to be used in app.js.