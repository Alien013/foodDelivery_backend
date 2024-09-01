import express from "express";
import cors from "cors";
import { connectDb } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";

// App config
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
connectDb();

// Serving static files for uploaded images
app.use("/uploads", express.static("uploads"));

// API endpoints
app.use("/api/food", foodRouter);

app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);

// Root endpoint
app.get("/", (req, res) => {
  res.send("API working");
});

// Start server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

// import express from "express";
// import cors from "cors";
// import { connectDb } from "./config/db.js";
// import foodRouter from "./routes/foodRoute.js";

// //app config
// const app = express();
// const port = 4000;

// //middleware
// app.use(express.json());
// app.use(cors());

// // database connection
// connectDb();

// //api endpoints
// app.use("/api/food", foodRouter);

// app.get("/", (req, res) => {
//   res.send("API working");
// });

// app.listen(port, () => {
//   console.log(`Server started on http://localhost:${port}`);
// });

// //mongodb+srv://alienx:<db_password>@cluster0.i708l.mongodb.net/?
