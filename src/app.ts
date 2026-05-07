import express, { Application } from "express";
import cors from "cors";
import productRoutes from "./routes/product-routes.js";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.set(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, proxy-revalidate",
  );
  res.set("Pragma", "no-cache");
  res.set("Expires", "0");
  next();
});

app.get("/", (req, res) => res.send("API para pruebas ITFS24"));

app.use("/api/products", productRoutes);

export default app;
