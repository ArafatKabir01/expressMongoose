import express from 'express'
import { StudentController } from './student.controller'

const router = express.Router()

router.get('/students', StudentController.getAllStudents)
router.get('/:studentId', StudentController.getSingleStudent)

export const StudentRouter = router
