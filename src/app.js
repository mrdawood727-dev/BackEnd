import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
});

app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ limit: "20mb", extended: true }));

app.use(express.static("public"));
app.use(cookieParser());
export default app;
