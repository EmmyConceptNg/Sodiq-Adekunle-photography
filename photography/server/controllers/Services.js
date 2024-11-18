import { errorHandling } from "../middleware/errorHandler.js";
import Portfolio from "../models/Portfolio.js";
import path from "path";
import fs from "fs";
import Service from "../models/Service.js";
const __dirname = path.resolve();

const checkDuplicateName = async (name) => {
  return false;
};

export const addService = async (req, res, next) => {
  try {
    const { name } = req.body;

    console.log(req.body)

    // Case-insensitive check for duplicate service name
    const duplicateService = await Service.findOne({
      name: { $regex: new RegExp("^" + name + "$", "i") },
    });

    if (duplicateService) {
      return res
        .status(400)
        .json({ message: "Service name already exists." });
    }

   
    const service = await Service.create({
      name,
    });

    res
      .status(201)
      .json({ message: "Service Added Successfully", service });
  } catch (error) {
    next(new Error(error.stack));
  }
};

export const getServices = (req, res, next) => {
  
  Service.find()
    .then((services) => {
      res.status(200).json({ services, message: "Fetched all services" });
    })
    .catch((error) => next(new Error(error.stack)));
};

export const getService = (req, res, next) => {
  Service.findById(req.params.serviceId)
    .then((service) =>
      res
        .status(200)
        .json({ service, message: `Fetched service ${service.name}` })
    )
    .catch((error) => next(new Error(error.stack)));
};

export const updateService = async (req, res, next) => {
  try {
    const { name } = req.body;

    // Case-insensitive check for duplicate service name
    const duplicateService = await Service.findOne({
      name: { $regex: new RegExp("^" + name + "$", "i") },
      _id: { $ne: req.params.serviceId }, // Exclude the current portfolio from the check
    });

    if (duplicateService) {
      return res
        .status(400)
        .json({ message: "Service name already exists." });
    }

    // Find the existing servoce
    let service = await Service.findById(req.params.serviceId);

    

    if (!service) {
      return res.status(404).json({ message: "Service not found." });
    }

    
    service.name = name;

    await service.save();

    res
      .status(200)
      .json({ service, message: "Service Updated Successfully" });
  } catch (error) {
    console.log(error)
    next(new Error(error.stack));
  }
};

export const deleteService = async (req, res, next) => {
  try {
    const serviceId = req.params.serviceId;

    const service = await Service.findById(serviceId);
    if (!service) errorHandling("404|Could not find service.|");

    await Service.findOneAndDelete({_id:serviceId});

    const services = await Service.find();
    res.status(200).json({
      message: "Service and associated projects deleted successfully'", services
    });
  } catch (error) {
    next(new Error(error.stack));
  }
};
