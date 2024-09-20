import { errorHandling } from "../middleware/errorHandler.js";
import Project from "../models/Project.js";
import Service from "../models/Service.js";

const checkDuplicateName = async (name) => {
  return false;
};

export const addService = async (req, res, next) => {
  try {
    const { name } = req.body;

    // Case-insensitive check for duplicate service name
    const duplicateService = await Service.findOne({
      name: { $regex: new RegExp("^" + name + "$", "i") },
    });
    if (duplicateService) {
      errorHandling("400|Service name already exists.|");
    }

    const service = await Service.create({ name });

    res.status(201).json({ message: "Service Added Successfully", service });
  } catch (error) {
    next(new Error(error.stack));
  }
};

export const getServices = (req, res, next) => {
  console.log("services");
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
        .json({ service, message: `Fetched Service ${service.name}` })
    )
    .catch((error) => next(new Error(error.stack)));
};

export const updateService = async (req, res, next) => {
  try {
    const { name } = req.body;
    //   check duplicate service
    const duplicateService = await Service.findOne({
      name: { $regex: new RegExp("^" + name + "$", "i") },
    });
    if (duplicateService) {
      errorHandling("400|Service name already exists.|");
    }

    const service = await Service.findOneAndUpdate(
      { _id: req.params.serviceId },
      { name: name },
      { new: true }
    );

    res
      .status(200)
      .json({ service, message: "Service Name Updated Successfully" });
  } catch (error) {
    next(new Error(error.stack));
  }
};

export const deleteService = async (req, res, next) => {
  try {
    const serviceId = req.params.serviceId;

    const service = await Service.findById(serviceId);
    if (!service) errorHandling("404|Could not find service.|");

    await Project.deleteMany({ _id: { $in: service.projects } });

    await Service.findOneAndDelete(serviceId);

    res.status(200).json({
      message: "Service and associated projects deleted successfully'",
    });
  } catch (error) {
    next(new Error(error.stack));
  }
};
