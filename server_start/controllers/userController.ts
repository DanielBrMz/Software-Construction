import UserModel from "../models/userModel";
import type { Request, Response } from "express";

async function getAllUsers(req: Request, res: Response) {
  // const users = await getAllUsers();
  // res.status(200).json(users);
  try {
    const users = await UserModel.getAllUsers();
    res.status(200).json(users); // Establece el estado HTTP a 200 y luego envía la respuesta JSON
  } catch (err) {
    console.log("This is an error", err);
    res.status(500).send("sos gilipollas "); // Establece el estado HTTP a 500 y luego envía el mensaje de error
  }
}

async function getUserById(req: Request, res: Response) {
  const { id } = req.params;
  console.log("id", id);

  try {
    const user = await UserModel.getUserById(id);
    res.json(user);
  } catch (err) {
    res.status(500).send("sos gilipollas lol");
    console.log("This is an error in create user by id", err);
  }
}

async function createUser(req: Request, res: Response) {
  const user = req.body;
  console.log("user", user);

  try {
    const newUser = await UserModel.createUser(user);
    res.json(newUser);
  } catch (err) {
    res.status(500).send("sos gilipollas ");
    console.log("Error in create user", err);
  }
}

async function updateUser(req: Request, res: Response) {
  const { id } = req.params;
  const user = req.body;

  try {
    const updatedUser = await UserModel.updateUser(id, user);
    res.json(updatedUser);
  } catch (err) {
    res.status(500).send("sos gilipollas ");
    console.log("Error updating user", err);
  }
}

async function deleteUser(req: Request, res: Response) {
  const { id } = req.params;

  try {
    await UserModel.deleteUser(id);
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).send("sos gilipollas ");
    console.log("Error deleting user", err);
  }
}

export default { getAllUsers, getUserById, createUser, updateUser, deleteUser };
