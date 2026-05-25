import mongoose from 'mongoose';

const yearSchema = new mongoose.Schema(
  {
    year: {
      type: Number,
      required: true,
      enum: [1, 2, 3, 4],
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Department',
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

yearSchema.index({ year: 1, department: 1 }, { unique: true });

const Year = mongoose.model('Year', yearSchema);
export default Year;