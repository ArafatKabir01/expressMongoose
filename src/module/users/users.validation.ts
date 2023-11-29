import Joi from 'joi'

const userValidationSchema = Joi.object({
  id: Joi.string().required(),
  password: Joi.string().min(6).max(15),
  needPasswordChange: Joi.boolean().default(true),
  role: Joi.string().valid('admin', 'student', 'faculty'),
  status: Joi.string().valid('in-progress', 'block'),
  isDeleted: Joi.boolean().default(false),
})

export default userValidationSchema
