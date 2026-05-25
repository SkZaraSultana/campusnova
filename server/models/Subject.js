import mongoose from 'mongoose';

const subjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Subject name is required'],
      trim: true,
    },
    code: {
      type: String,
      required: true,
      uppercase: true,
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Department',
      required: true,
    },
    year: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Year',
      required: true,
    },
    credits: {
      type: Number,
      default: 3,
    },
    faculty: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

subjectSchema.index({ code: 1, department: 1, year: 1 }, { unique: true });

const Subject = mongoose.model('Subject', subjectSchema);
export default Subject;