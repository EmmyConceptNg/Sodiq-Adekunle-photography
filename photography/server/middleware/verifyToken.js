import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  // Check if auth header is present and starts with 'Bearer'
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({ message: "No token provided." });
  }

  // Extract the token from the 'Bearer' string
  const token = authHeader.split(" ")[1];

  // console.log(token); // Debugging: log the token to check its validity

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      // console.log(err)
      return res.status(401).json({ message: "Unauthorized!" });
    }

    req.user = decoded; // Attach the decoded payload to the request object
    next();
  });
};

export default verifyToken;
