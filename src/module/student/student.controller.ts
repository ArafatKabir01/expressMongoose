import { Request, Response } from 'express'

import { StudentService } from './student.service'
import studentSchema from './student.validation'

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student
    const { error, value } = studentSchema.validate(student)

    if (error) {
      res.status(500).json({
        success: false,
        massage: 'somthing went wrong',
        error: error.details,
      })
    } else {
      const result = await StudentService.createStudentInToDb(value)

      res.status(200).json({
        success: true,
        massage: 'Create student successfully',
        data: result,
      })
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      massage: 'somthing went wrong',
      data: error,
    })
  }
}
const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.getStudentInToDb()
    res.status(200).json({
      success: true,
      massage: 'there is all student',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params
    const result = await StudentService.getSingleStudent(studentId)
    res.status(200).json({
      success: true,
      massage: 'there is all student',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

export const StudentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
}
