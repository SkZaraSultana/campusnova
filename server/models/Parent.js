import mongoose from 'mongoose';

const parentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
      },
    ],
    relationship: {
      type: String,
      enum: ['Father', 'Mother', 'Guardian'],
      required: true,
    },
    occupation: String,
    address: String,
    secondaryPhone: String,
  },
  { timestamps: true }
);

const Parent = mongoose.model('Parent', parentSchema);
export default Parent;