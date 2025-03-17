// Import necessary modules
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import helmet from "helmet";
import morgan from "morgan";
import userRoutes from "./routes/authRoutes.js";
import servicesRoutes from "./routes/servicesRoutes.js";
import portfoliosRoutes from "./routes/portfolioRoutes.js";
import educationsRoutes from "./routes/educationRoutes.js";
import experiencesRoutes from "./routes/experienceRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import path from "path";
import { fileURLToPath } from "url";
import { errorProcessing, logErrorToFile } from "./middleware/errorHandler.js";
import YAML from "yamljs";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import fileUpload from "express-fileupload"; // Import express-fileupload

// CONFIGURATION
const app = express();


app.use(
  cors({
    origin: (origin, callback) => {
      callback(null, true); // Allow all origins
    },
    credentials: true,
  })
);



app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(fileUpload()); // Enable file upload

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
// const envFile =
//   process.env.NODE_ENV === "production" ? ".env.production" : ".env.local";
// dotenv.config({ path: envFile });

// Serve static files from the "public/images" directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Log incoming requests
app.use((req, res, next) => {
  console.log(`Request from origin: ${req.headers.origin}`);
  next();
});

// Route handling
app.get("/", function (req, res) {
  res.send("Welcome to adekunle server");
});
app.use("/api/auth", userRoutes);
app.use("/api/services", servicesRoutes);
app.use("/api/portfolios", portfoliosRoutes);
app.use("/api/educations", educationsRoutes);
app.use("/api/experiences", experiencesRoutes);
app.use("/api/contact", contactRoutes);

// Swagger Api Documentation
const swaggerDocument = YAML.load(path.resolve(__dirname, "swagger.yaml"));

app.use("/api-docs/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Error handling middleware
app.use((error, req, res, next) => {
  if (error instanceof Error) error = errorProcessing(error);
  logErrorToFile(error); // Always log the error
  const statusCode = error.errorCode ? error.errorCode : 500;
  const statusMessage = error.errorMessage
    ? error.errorMessage
    : { error: { message: "Internal server error." } };

  res.status(parseInt(statusCode)).json(statusMessage);
});

// MongoDB setup
const PORT = process.env.PORT || 8080;
mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => {
    console.log("============== Connected to MongoDB ==============");
    app.listen(PORT, () => {
      console.log("================================================");
      console.log(
        `====== Adekunle Server is running on ${PORT} ==============`
      );
    });
  })
  .catch((error) => console.log(`${error} did not connect`));
