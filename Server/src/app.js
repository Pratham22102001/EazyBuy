import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import path from "path"; // Add this to serve static files

// Initialize Express app
const app = express();

// Configure dotenv
dotenv.config();
app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);

// Middleware
app.use(helmet());
app.use(mongoSanitize());
//middleware

app.use(express.json()); // we can use json in req and res
app.use(morgan("dev"));

//rest api
app.get("/", (req, res) => {
  res.send({
    message: "Welcone to Eazy Buy",
  });
});

//routes import
import userRoutes from "./routes/user.routes.js";
import categoryRoutes from "./routes/category.routes.js";
import productRoutes from "./routes/product.routes.js";

//routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

export default app;
