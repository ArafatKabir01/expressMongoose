import { Request, Response } from 'express'
import { StudentService } from './student.service'

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student
    console.log(student)

    const result = await StudentService.createStudentInToDb(student)

    res.status(200).json({
      success: true,
      massage: 'Create student successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
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
