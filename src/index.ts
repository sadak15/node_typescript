import express from "express";
import goodbyeRoutes from "./routes/goodbye.routes";

const app = express();
const PORT = 3000;

app.use("/", goodbyeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
