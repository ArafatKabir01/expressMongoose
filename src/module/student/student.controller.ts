import { Request, Response } from 'express'

// import studentSchema from './student.joi.validation'
import { StudentService } from './student.service'

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
  getAllStudents,
  getSingleStudent,
}
