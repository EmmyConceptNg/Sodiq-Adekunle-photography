import mongoose from 'mongoose'

const EducationSchema = mongoose.Schema(
  {
    name: String,
    course: String,
    startDate: Date,
    endDate: Date,
  },
  { timestamps: true }
);

const Education = mongoose.model("Education", EducationSchema)

export default Education;