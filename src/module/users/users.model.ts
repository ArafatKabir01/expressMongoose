import { Schema, model } from 'mongoose'
import { TUsers } from './users.interface'

const UserSchema = new Schema<TUsers>(
  {
    id: {
      type: String,
      reqired: true,
    },
    password: {
      type: String,
      default: '',
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

export const User = model<TUsers>('User', UserSchema)
