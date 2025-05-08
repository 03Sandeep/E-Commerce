import { hashPassword } from "../helpers/authHelper.js";
import User from "../models/User.js";
export const registerController = async (req, res) => {
  // registration logic here
  try {
    const { name, email, password, phone, address } = req.body;
    //validation
    if (!name) {
      return res.send({ error: "Name is Required" });
    }
    if (!email) {
      return res.send({ error: "Email is Required" });
    }
    if (!password) {
      return res.send({ error: "Password is Required" });
    }
    if (!phone) {
      return res.send({ error: "Phone no. is Required" });
    }
    if (!address) {
      return res.send({ error: "Address is Required" });
    }

    //Existing user
    const Existinguser = await User.findOne({ email });

    if (Existinguser) {
      return res.status(200).send({
        success: true,
        message: "Already Registered Please Login",
      });
    }

    //Register User
    const hashedPassword = await hashPassword(password);
    //save

    const user = await new User({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
    }).save();
    res.status(201).send({
      success: true,
      message: "User Registered Successfully",
      user,
    });
  } catch (error) {
    console.log(err);
    res.status(500).send({
      sucess: false,
      message: "Error in Registration",
      error,
    });
  }
};
