import * as express from "express";
const userRouter = express.Router();
import {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} from "../../controllers/UserController";
userRouter.get("/", getAllUsers);
userRouter.post("/create", createUser);
userRouter.get("/show", getUserById);
userRouter.put("/update", updateUser);
userRouter.delete("/destroy", deleteUser);

export default userRouter;
