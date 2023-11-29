import { Student } from './student.model'

// const createStudentInToDb = async (studentData: TStudent) => {
//   const result = await Student.create(studentData)
//   // const student = new Studentmodel(studentData)
//   // const result = student.save()
//   return result
// }
const getStudentInToDb = async () => {
  const result = await Student.find()
  return result
}
const getSingleStudent = async (id: string) => {
  const result = await Student.findOne({ id })
  return result
}

export const StudentService = {
  // createStudentInToDb,
  getStudentInToDb,
  getSingleStudent,
}
