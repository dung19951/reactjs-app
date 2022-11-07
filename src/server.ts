import app from "./app";
import { PORT, MONGO_URI } from "./config/index";
import dbConnect from "./config/database";
import router from "./routes/index";

dbConnect;
const port = PORT || 8080;
router.map((e) => {
  app.use("/api/" + e.key, e.value);
});

app.listen(port, () => {});
