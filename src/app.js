import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
});

app.use(express.json({ limit: '50mb' }));

export default app;
