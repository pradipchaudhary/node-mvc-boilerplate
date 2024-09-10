// src/controllers/userController.ts

import { Request, Response } from "express";
import User from "../models/userModel";

// Controller to handle creating a new user
export const createUser = async (req: Request, res: Response) => {
    try {
        // Extract data from the request body
        const { name, email, password } = req.body;

        // Create a new user
        const newUser = new User({ name, email, password });

        // Save the user to the database
        const savedUser = await newUser.save();

        // Send a success response
        res.status(201).json({
            message: "User created successfully",
            user: savedUser,
        });
    } catch (error) {
        res.status(500).json({ message: "Error creating user", error });
    }
};

// Controller to handle fetching all users
export const getUsers = async (req: Request, res: Response) => {
    try {
        // Fetch all users from the database
        const users = await User.find();

        // Send the fetched users in the response
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
    }
};

// Controller to handle fetching a single user by ID
export const getUserById = async (req: Request, res: Response) => {
    try {
        // Get the user ID from the request parameters
        const userId = req.params.id;

        // Fetch the user by ID from the database
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Send the user data in the response
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user", error });
    }
};

// Controller to handle updating a user by ID
export const updateUser = async (req: Request, res: Response) => {
    try {
        // Get the user ID from the request parameters
        const userId = req.params.id;

        // Find the user by ID and update their information
        const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
            new: true,
        });

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        // Send the updated user data in the response
        res.status(200).json({
            message: "User updated successfully",
            user: updatedUser,
        });
    } catch (error) {
        res.status(500).json({ message: "Error updating user", error });
    }
};

// Controller to handle deleting a user by ID
export const deleteUser = async (req: Request, res: Response) => {
    try {
        // Get the user ID from the request parameters
        const userId = req.params.id;

        // Find the user by ID and delete them
        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        // Send a success response
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting user", error });
    }
};
