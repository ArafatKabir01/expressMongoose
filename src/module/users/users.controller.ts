import { NextFunction, Request, Response } from 'express'
import { userService } from './users.service'

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { password, student: studentData } = req.body
    const result = await userService.createStudent(password, studentData)
    res.status(200).json({
      success: true,
      massage: 'Create student successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}
export const userController = {
  createUser,
}
