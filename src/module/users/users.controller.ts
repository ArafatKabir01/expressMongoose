import { Request, Response } from 'express'
import { userService } from './users.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const { password, student: studentData } = req.body
    console.log({ password, studentData })
    const result = await userService.createStudent(password, studentData)
    res.status(200).json({
      success: true,
      massage: 'Create student successfully',
      data: result,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      massage: 'somthing went wrong',
      data: error,
    })
  }
}
export const userController = {
  createUser,
}
