import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './user.interface';

const userSchema = new Schema<IUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  // created at and updated at
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

export const Users = model<IUser, UserModel>('Users', userSchema);
