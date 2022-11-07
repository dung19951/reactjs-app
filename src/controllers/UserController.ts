import UserService from "../service/UserService";
import HttpStatusCode from "../constants/httpStatusCode";
export const getAllUsers = async (req, res) => {
  try {
    const blogs = await UserService.getAll();
    res.json({ data: blogs, status: "success" });
  } catch (err) {
    res.status(HttpStatusCode.INTERNAL_SERVER).json({ error: err.message });
  }
};

export const createUser = async (req, res) => {
  // try {
  //   const user = await UserService.create(req.body);
  //   res.json({ data: user, status: "success" });
  // } catch (err) {
  //   res.status(HttpStatusCode.INTERNAL_SERVER).json({ error: err.message });
  // }
  console.log(req.body)
};

export const getUserById = async (req, res) => {
  try {
    const user = await UserService.getById(req.params.id);
    res.json({ data: user, status: "success" });
  } catch (err) {
    res.status(HttpStatusCode.INTERNAL_SERVER).json({ error: err.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await UserService.update(req.params.id, req.body);
    res.json({ data: user, status: "success" });
  } catch (err) {
    res.status(HttpStatusCode.INTERNAL_SERVER).json({ error: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await UserService.destroy(req.params.id);
    res.json({ data: user, status: "success" });
  } catch (err) {
    res.status(HttpStatusCode.INTERNAL_SERVER).json({ error: err.message });
  }
};
