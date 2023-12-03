import bcrypt from 'bcrypt'
import { Schema, model } from 'mongoose'
import config from '../../config'
import { TUsers } from './users.interface'
const UserSchema = new Schema<TUsers>(
  {
    id: {
      type: String,
      reqired: true,
      unique: true,
    },
    password: {
      type: String,
    },
    needPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ['admin', 'student', 'faculty'],
    },
    status: {
      type: String,
      enum: ['in-progress', 'bloock'],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
)

UserSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, Number(config.saltRounds))
  next()
})

UserSchema.post('save', function (doc, next) {
  doc.password = ''
  next()
})

export const User = model<TUsers>('User', UserSchema)
