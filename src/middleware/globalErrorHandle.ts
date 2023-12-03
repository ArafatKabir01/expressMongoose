/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction } from 'express'
import { Request, Response } from 'express-serve-static-core'

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = 500
  const massage = err || 'Somthing went wrong'
  return res.status(statusCode).json({
    success: false,
    massage,
    Error: err,
  })
}
export default globalErrorHandler
