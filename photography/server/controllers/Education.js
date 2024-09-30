import { errorHandling } from "../middleware/errorHandler.js";
import Education from "../models/Education.js";
import path from "path";
import fs from "fs";
const __dirname = path.resolve();

const checkDuplicateName = async (name) => {
  return false;
};

export const addEducation = async (req, res, next) => {
  try {
    const { name, course, startDate, endDate } = req.body;

    // Case-insensitive check for duplicate education name
    const duplicateEducation = await Education.findOne({
      name: { $regex: new RegExp("^" + name + "$", "i") },
    });

    if (duplicateEducation) {
      return res
        .status(400)
        .json({ message: "Education name already exists." });
    }

    
    const education = await Education.create({name, course, startDate, endDate});

    res
      .status(201)
      .json({ message: "Education Added Successfully", education });
  } catch (error) {
    next(new Error(error.stack));
  }
};

export const getEducations = (req, res, next) => {
  console.log("Educations");
  Education.find()
    .then((educations) => {
      res.status(200).json({ educations, message: "Fetched all educations" });
    })
    .catch((error) => next(new Error(error.stack)));
};

export const getEducation = (req, res, next) => {
  Education.findById(req.params.educationId)
    .then((education) =>
      res
        .status(200)
        .json({ education, message: `Fetched education ${education.name}` })
    )
    .catch((error) => next(new Error(error.stack)));
};

export const updateEducation = async (req, res, next) => {
  try {
    const { name, course, startDate, endDate } =
      req.body;

    // Case-insensitive check for duplicate education name
    const duplicateEducation = await Education.findOne({
      name: { $regex: new RegExp("^" + name + "$", "i") },
      _id: { $ne: req.params.educationId }, // Exclude the current education from the check
    });

    if (duplicateEducation) {
      return res
        .status(400)
        .json({ message: "Education name already exists." });
    }

    // Find the existing education
    let education = await Education.findById(req.params.educationoId);

    if (!education) {
      return res.status(404).json({ message: "Education not found." });
    }



    // Update the education with new data
    education.name = name;
    education.course = course;
    education.startDate = startDate;
    education.endDate = endDate;
    await education.save();

    res
      .status(200)
      .json({ education, message: "Education Updated Successfully" });
  } catch (error) {
    next(new Error(error.stack));
  }
};

export const deleteEducation = async (req, res, next) => {
  try {
    const educationId = req.params.educationId;
    console.log(educationId);

    const education = await Education.findById(educationId);
    if (!education) errorHandling("404|Could not find portfolio.|");

    await Education.findOneAndDelete({_id:educationId});

    const educations = await Education.find();
    res.status(200).json({
      message: "Education and associated projects deleted successfully'", educations
    });
  } catch (error) {
    next(new Error(error.stack));
  }
};
