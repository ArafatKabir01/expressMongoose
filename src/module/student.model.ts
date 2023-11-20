import { Schema, model } from 'mongoose'
import {
  Guardain,
  LocalGuardian,
  Student,
  Username,
} from './student/student.interface'
//Schema
const userNameSchema = new Schema<Username>({
  firstName: { type: String, required: true },
  middlename: { type: String, required: false },
  lastname: { type: String, required: true },
})
const guardian = new Schema<Guardain>({
  fatherName: String,
  fatherOcopation: String,
  motherName: String,
  motherOcopation: String,
  motherPhoneNo: String,
})
const localGuardian = new Schema<LocalGuardian>({
  name: String,
  phoneNomber: String,
})

const studendSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  adress: String,
  phoneNumber: String,
  email: String,
  gender: ['male', 'female'],
  dateOfBirth: String,
  bloodGroup: ['A+', 'B+', 'A-', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
  guardian: guardian,
  localGuardian: localGuardian,
  profileImg: String,
  isRegular: ['regular', 'eregular'],
})

//Model
export const Studentmodel = model<Student>('Student', studendSchema)
