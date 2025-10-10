import { User } from "../modals/user.modal.js";
import { Apierror } from "../utils/APIerror.js";
import jwt from "jsonwebtoken";

export const verifyJWT = async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return next(new Apierror(401, "Unauthorized request: No token found"));
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decodedToken?._id).select(
      "-password -refreshToken"
    );

    if (!user) {
      return next(new Apierror(401, "Invalid token or user no longer exists"));
    }

    req.user = user;
    next();
  } catch (error) {
    const message =
      error?.message === "jwt expired"
        ? "Access token expired. Please log in again."
        : "Invalid or malformed token";
    return next(new Apierror(401, message));
  }
};
