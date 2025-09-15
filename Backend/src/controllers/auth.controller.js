import { User } from "../modals/user.modal.js";    
import { Apierror } from "../utils/APIerror.js";
import { APIresp } from "../utils/APIresp.js"; // Assuming you have this
import jwt from "jsonwebtoken"; // Required for token generation



const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = await user.generateAccesstoken();
    const refreshToken = await user.generateRefreshtoken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new Apierror(
      500,
      error,
      "Something went wrong while generating access and refresh tokens"
    );
  }
};
// REGISTER FUNCTION
const registerFunction = async (req, res) => {
  const { username, password, fullname, email } = req.body;
  if (!username || !password || !fullname || !email) {
    return res.status(400).json({ message: "All fields are required." });
  }
  try {
    const newUser = new User({ username, password, fullname, email });
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const loginUser = async (req, res) => {
// LOGIN FUNCTIONconst loginUser = AsyncHanddler(async (req, res) => {
  // * request body se data le aao
  // * username or emails se login
  // * find the user
  // * password check
  // * access and refresh token generate and give to user
  // * send through secure cookie

  const { username, email, password } = req.body || {};

  if (!username && !email) {
    throw new Apierror(400, "Username or email is required");
  }

  const user = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) {
    throw new Apierror(404, "User does not exist");
  }

  const isPasswordCorrect = await user.isPasswordCorrect(password);

  if (!isPasswordCorrect) {
    throw new Apierror(401, "Invalid credentials");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user._id
  );

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new APIresp(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "User logged in successfully"
      )
    );
};
const logoutUser = async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        refreshToken: undefined,
      },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new APIresp(200, {}, "User logged out successfully"));
};

export { registerFunction, loginUser ,logoutUser};
