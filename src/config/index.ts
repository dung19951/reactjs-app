import * as dotenv from "dotenv";
dotenv.config();

if (!process.env.PORT) {
  console.error("==> Please check your .env");
  process.exit(1);
}
export const { PORT, MONGO_URI } = process.env;
