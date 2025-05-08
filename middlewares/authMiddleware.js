import JWT from "jsonwebtoken";
import User from "../models/User.js";

export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = await User.findOne({ _id: decode._id });
    // console.log(req.user);
    next();
  } catch (err) {
    console.log(err);
  }
};
