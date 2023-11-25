import { Schema, model } from 'mongoose'

import {
  Guardian,
  LocalGuardian,
  Student,
  Username,
} from './student/student.interface'
//Schema
const userNameSchema = new Schema<Username>({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    maxlength: [20, 'First name in maximum 20 cheracter'],
    trim: true,
    // validate: {
    //   validator: function (value: string): boolean {
    //     const firstNamestr = value.charAt(0).toUpperCase() + value.slice(1)
    //     return firstNamestr === value
    //   },
    //   message: 'You type your name wrong approch',
    // },
  },
  middlename: { type: String, required: false },
  lastname: {
    type: String,
    required: [true, 'Last name is required'],
    // validate: {
    //   validator: (value: string) => validator.isNumeric(value),
    //   message: '{VALUE} is not correct',
    // },
  },
})

const guardian = new Schema<Guardian>({
  fatherName: { type: String, required: [true, 'Father name is required'] },
  fatherOccupation: String,
  motherName: { type: String, required: [true, 'Mother name is required'] },
  motherOccupation: String,
  motherPhoneNo: String,
})

const localGuardian = new Schema<LocalGuardian>({
  name: {
    type: userNameSchema,
    required: [true, 'Local guardian name is required'],
  },
  phoneNomber: String,
})

const studentSchema = new Schema<Student>({
  id: {
    type: String,
    unique: true,
    message: 'ID already exists',
  },
  name: {
    type: userNameSchema,
    required: [true, 'Student name is required'],
  },
  address: String,
  phoneNumber: String,
  email: { type: String, required: [true, 'Email is required'], unique: true },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: '{VALUE} is not valid',
    },
    required: [true, 'Gender is required'],
    default: 'male',
  },
  dateOfBirth: Number,
  bloodGroup: {
    type: String,
    enum: ['A+', 'B+', 'A-', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
  },
  guardian: guardian,
  localGuardian: localGuardian,
  profileImg: String,
  isRegular: {
    type: String,
    enum: ['regular', 'eregular'],
    default: 'regular',
  },
})

//Model
export const Studentmodel = model<Student>('Student', studentSchema)
