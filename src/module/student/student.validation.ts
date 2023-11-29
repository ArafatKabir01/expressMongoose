import mongoose from 'mongoose'
import z from 'zod'
const UsernameValidationSchema = z.object({
  firstName: z.string().min(1).max(20).trim(),
  middlename: z.string().optional(),
  lastname: z.string().min(1),
})

// Define zod schema for Guardian
const GuardianValidationSchema = z.object({
  fatherName: z.string().min(1),
  fatherOccupation: z.string().optional(),
  fatherPhoneNo: z.string().optional(),
  motherName: z.string().min(1),
  motherOccupation: z.string().optional(),
  motherPhoneNo: z.string().optional(),
})

// Define zod schema for LocalGuardian
const LocalGuardianValidationSchema = z.object({
  name: UsernameValidationSchema.required(),
  phoneNomber: z.string().min(1),
})

// Define zod schema for Student
const StudentValidationSchema = z.object({
  id: z
    .string()
    .min(1)
    .refine(value => value.length <= 20, {
      message: 'ID must be at most 20 characters long',
    }),
  user: z.string().refine(val => {
    return mongoose.Types.ObjectId.isValid(val)
  }),
  name: UsernameValidationSchema.required(),
  address: z.string().min(1),
  phoneNumber: z.string().min(1),
  email: z.string().email(),
  gender: z.enum(['male', 'female']),
  dateOfBirth: z.number(),
  bloodGroup: z.enum(['A+', 'B+', 'A-', 'B-', 'O+', 'O-', 'AB+', 'AB-']),
  guardian: GuardianValidationSchema.required(),
  localGuardian: LocalGuardianValidationSchema.required(),
  profileImg: z.string().min(1),
  isRegular: z.enum(['regular', 'eregular']),
})

export default StudentValidationSchema
