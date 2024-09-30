import { errorHandling } from "../middleware/errorHandler.js";
import Experience from "../models/Experience.js";
import path from "path";
import fs from "fs";
const __dirname = path.resolve();

const checkDuplicateName = async (name) => {
  return false;
};

export const addExperience = async (req, res, next) => {
  try {
    const { name, location, startDate, endDate } = req.body;

    // Case-insensitive check for duplicate Experience name
    const duplicateExperience = await Experience.findOne({
      name: { $regex: new RegExp("^" + name + "$", "i") },
    });

    if (duplicateExperience) {
      return res
        .status(400)
        .json({ message: "Experience name already exists." });
    }

    
    const experience = await Experience.create({name, location, startDate, endDate});

    res
      .status(201)
      .json({ message: "Experience Added Successfully", experience });
  } catch (error) {
    next(new Error(error.stack));
  }
};

export const getExperiences = (req, res, next) => {
  console.log("Experiences");
  Experience.find()
    .then((experiences) => {
      res.status(200).json({ experiences, message: "Fetched all Experiences" });
    })
    .catch((error) => next(new Error(error.stack)));
};

export const getExperience = (req, res, next) => {
  Experience.findById(req.params.experienceId)
    .then((experience) =>
      res
        .status(200)
        .json({ experience, message: `Fetched experience ${experience.name}` })
    )
    .catch((error) => next(new Error(error.stack)));
};

export const updateExperience = async (req, res, next) => {
  try {
    const { name, course, startDate, endDate } =
      req.body;

    // Case-insensitive check for duplicate Experience name
    const duplicateExperience = await Experience.findOne({
      name: { $regex: new RegExp("^" + name + "$", "i") },
      _id: { $ne: req.params.experienceId }, // Exclude the current experience from the check
    });

    if (duplicateExperience) {
      return res
        .status(400)
        .json({ message: "Experience name already exists." });
    }

    // Find the existing Experience
    let experience = await Experience.findById(req.params.experienceoId);

    if (!experience) {
      return res.status(404).json({ message: "Experience not found." });
    }



    // Update the experience with new data
    experience.name = name;
    experience.course = course;
    experience.startDate = startDate;
    experience.endDate = endDate;
    await experience.save();

    res
      .status(200)
      .json({ experience, message: "Experience Updated Successfully" });
  } catch (error) {
    next(new Error(error.stack));
  }
};

export const deleteExperience = async (req, res, next) => {
  try {
    const experienceId = req.params.experienceId;
    console.log(experienceId);

    const experience = await Experience.findById(experienceId);
    if (!experience) errorHandling("404|Could not find portfolio.|");

    await Experience.findOneAndDelete({ _id: experienceId });

    const experiences = await Experience.find();
    res.status(200).json({
      message: "Experience and associated projects deleted successfully'", experiences
    });
  } catch (error) {
    next(new Error(error.stack));
  }
};
