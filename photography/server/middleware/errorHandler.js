import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const logFilePath = path.join(__dirname, "..", "logs", "error.log.txt");

export const errorProcessing = (receivedErrorMessage) => {
  // Ensure receivedErrorMessage and receivedErrorMessage.message are defined
  if (!receivedErrorMessage || !receivedErrorMessage.message) {
    logErrorToFile(receivedErrorMessage);
    return {
      errorCode: 500,
      errorMessage: {
        message: "Internal Server Error.",
      },
    };
  }

  // Split the error response
  let errorMessage = receivedErrorMessage.message.split(":");
  errorMessage = errorMessage[1]?.split("|") || [
    "500",
    "Internal Server Error.",
  ];
  let errorObject = errorMessage.length;

  // If no error code is provided, log the error
  if (errorObject <= 1) logErrorToFile(receivedErrorMessage);

  return {
    errorCode: errorObject > 1 ? errorMessage[0] : 500,
    errorMessage: {
      message: errorObject > 1 ? errorMessage[1] : "Internal Server Error.",
    },
  };
};

export const errorHandling = (receivedErrorMessage) => {
  throw new Error(receivedErrorMessage);
};

// Ensure the directory exists
const ensureDirectoryExistence = (filePath) => {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
};

// Function to log error to a file
export const logErrorToFile = (receivedErrorMessage) => {
  ensureDirectoryExistence(logFilePath); // Ensure directory exists
  console.error(receivedErrorMessage); // Log to console
  fs.appendFileSync(
    logFilePath,
    new Date() + " " + JSON.stringify(receivedErrorMessage, null, 2) + "\r\n"
  );
};
