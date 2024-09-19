import mongoose from "mongoose";

const ProjectSchema = mongoose.Schema({
  name: String,
  description: String,
  client: String,
  date: Date,
  images: [{ type: String }],
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
  },
});


const Project = mongoose.model('Project', ProjectSchema)

export default Project;