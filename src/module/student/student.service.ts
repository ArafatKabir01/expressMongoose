import { Studentmodel } from '../student.model'
import { Student } from './student.interface'

const createStudentInToDb = async (student: Student) => {
  const result = await Studentmodel.create(student)
  return result
}
const getStudentInToDb = async () => {
  const result = await Studentmodel.find()
  return result
}
const getSingleStudent = async (id: string) => {
  const result = await Studentmodel.findOne({ id })
  return result
}

export const StudentService = {
  createStudentInToDb,
  getStudentInToDb,
  getSingleStudent,
}
