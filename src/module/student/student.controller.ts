import { NextFunction, Request, Response } from 'express'

// import studentSchema from './student.joi.validation'
import { StudentService } from './student.service'

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentService.getStudentInToDb()
    res.status(200).json({
      success: true,
      massage: 'there is all student',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params
    const result = await StudentService.getSingleStudent(studentId)
    res.status(200).json({
      success: true,
      massage: 'there is all student',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const StudentController = {
  getAllStudents,
  getSingleStudent,
}
