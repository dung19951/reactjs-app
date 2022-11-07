import { model, Schema, Document } from "mongoose";

interface IUser extends Document {
  email: string;
  name: string;
  password: String;
}

type UserDocument = IUser & Document;

const UserSchema: Schema = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
});

const User = model<UserDocument>("User", UserSchema);
export default User;
