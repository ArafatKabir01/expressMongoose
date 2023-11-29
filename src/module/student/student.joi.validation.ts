import Joi from 'joi'

const usernameSchema = Joi.object({
  firstName: Joi.string().required(),
  middlename: Joi.string(),
  lastname: Joi.string().required(),
})

const guardianSchema = Joi.object({
  fatherName: Joi.string().required(),
  fatherPhoneNo: Joi.string().required(),
  fatherOccupation: Joi.string().required(),
  motherName: Joi.string().required(),
  motherPhoneNo: Joi.string().required(),
  motherOccupation: Joi.string().required(),
})

const localGuardianSchema = Joi.object({
  name: usernameSchema.required(),
  phoneNomber: Joi.string().required(),
})

const studentSchema = Joi.object({
  id: Joi.string().required(),
  name: usernameSchema.required(),
  address: Joi.string().required(),
  phoneNumber: Joi.string().required(),
  email: Joi.string().email().required(),
  gender: Joi.string().valid('male', 'female').required(),
  dateOfBirth: Joi.number().required(),
  bloodGroup: Joi.string()
    .valid('A+', 'B+', 'A-', 'B-', 'O+', 'O-', 'AB+', 'AB-')
    .required(),
  guardian: guardianSchema.required(),
  localGuardian: localGuardianSchema.required(),
  profileImg: Joi.string().required(),
  isRegular: Joi.string().valid('regular', 'eregular').required(),
})
export default studentSchema
