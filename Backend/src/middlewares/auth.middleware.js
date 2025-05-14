import { User } from "../modals/user.modal.js";
import { Apierror } from "../utils/APIerror.js";
import jwt from "jsonwebtoken";

export const verifyJWT = async (req, _, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return next(new Apierror(401, "Unauthorized request"));
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decodedToken?._id).select(
      "-password -refreshToken"
    );

    if (!user) {
      return next(new Apierror(401, "Invalid token"));
    }

    req.user = user;
    next();
  } catch (error) {
    return next(new Apierror(401, error?.message || "Invalid access token"));
  }
};
