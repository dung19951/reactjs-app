import { MONGO_URI } from "./index";
import mongoose from "mongoose";
const uri = MONGO_URI;
const dbConnect = mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as mongoose.ConnectOptions,
  (err) => {
    if (err) {
      throw err;
    } else {
        console.log('connection success')
    }
  }
);
export default dbConnect;
