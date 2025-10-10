import { User } from "../modals/user.modal.js";
import { Apierror } from "../utils/APIerror.js";
import { APIresp } from "../utils/APIresp.js";
import jwt from "jsonwebtoken";

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new Apierror(
      500,
      "Error generating access and refresh tokens",
      error.message
    );
  }
};

// 🔹 REGISTER
const registerFunction = async (req, res) => {
  const { username, password, fullname, email } = req.body;

  if (!username || !password || !fullname || !email) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const existingUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existingUser) {
    throw new Apierror(409, "User already exists");
  }

  try {
    const newUser = new User({ username, password, fullname, email });
    await newUser.save();

    const safeUser = newUser.toObject();
    delete safeUser.password;

    return res
      .status(201)
      .json(new APIresp(201, safeUser, "User registered successfully"));
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// 🔹 LOGIN
const loginUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username && !email) {
    throw new Apierror(400, "Username or email is required");
  }

  const user = await User.findOne({ $or: [{ username }, { email }] });
  if (!user) throw new Apierror(404, "User not found");

  const isPasswordCorrect = await user.isPasswordCorrect(password);
  if (!isPasswordCorrect) throw new Apierror(401, "Invalid credentials");

  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user._id
  );

  const safeUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  return res.status(200).json(
    new APIresp(
      200,
      {
        user: safeUser,
        accessToken,
        refreshToken,
      },
      "Login successful"
    )
  );
};

// 🔹 LOGOUT
const logoutUser = async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    { $unset: { refreshToken: "" } },
    { new: true }
  );

  return res
    .status(200)
    .clearCookie("accessToken")
    .clearCookie("refreshToken")
    .json(new APIresp(200, {}, "Logout successful"));
};

// 🔹 GET CURRENT USER
const getme = async (req, res) => {
  if (!req.user)
    return res.status(401).json({ message: "Unauthorized access" });

  res.status(200).json(
    new APIresp(200, { user: req.user }, "Authenticated user fetched")
  );
};

export { registerFunction, loginUser, logoutUser, getme };
