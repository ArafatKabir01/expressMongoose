import config from '../../config'
import { TStudent } from '../student/student.interface'
import { Student } from '../student/student.model'
import { TUsers } from './users.interface'
import { User } from './users.model'

const createStudent = async (password: string, studentData: TStudent) => {
  const userData: Partial<TUsers> = {}
  console.log(studentData)
  userData.password = password || (config.default_pass as string)
  userData.role = 'student'
  userData.id = '202300030'

  const newuser = await User.create(userData)

  //create student
  if (Object.keys(newuser).length) {
    studentData.id = newuser.id
    studentData.user = newuser._id
    const result = await Student.create(studentData)
    return result
  }
}
export const userService = {
  createStudent,
}
