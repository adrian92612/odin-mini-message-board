import express, { urlencoded } from "express";
import { router } from "./routes/index.js";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", router);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
