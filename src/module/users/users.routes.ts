import express from 'express'
import { userController } from './users.controller'

const router = express.Router()

router.post('/create-student', userController.createUser)
// router.get('/students', StudentController.getAllStudents)
// router.get('/:studentId', StudentController.getSingleStudent)

export const UserRouter = router
