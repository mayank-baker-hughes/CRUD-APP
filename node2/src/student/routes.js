const express = require('express')

const router = express.Router()

const controller = require('./controller')


router.get('/', controller.getStudents)
router.post('/',controller.addStudent)
router.get('/:id', controller.getStudentById)

router.delete('/:id',controller.deleteStudent)
router.put('/:id',controller.updateStudentDetails)


module.exports = router;