import mongoose from 'mongoose'

const ExperienceSchema = mongoose.Schema(
  {
    name: String,
    location: String,
    startDate: Date,
    endDate: Date,
  },
  { timestamps: true }
);

const Experience = mongoose.model("Experience", ExperienceSchema)

export default Experience;