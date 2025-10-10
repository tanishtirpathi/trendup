import { User } from "../modals/user.modal.js";
import { Apierror } from "../utils/APIerror.js";
import { APIresp } from "../utils/APIresp.js";
import jwt from "jsonwebtoken";

/* ---------- UTILS ---------- */
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

/* ---------- TOKEN GENERATION ---------- */
const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) throw new Apierror(404, "User not found");

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new Apierror(500, `Token generation failed: ${error.message}`);
  }
};

/* ---------- REGISTER ---------- */
const registerFunction = asyncHandler(async (req, res) => {
  const { username, password, fullname, email } = req.body;

  if (!username || !password || !fullname || !email) {
    throw new Apierror(400, "All fields are required");
  }

  const existingUser = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (existingUser) throw new Apierror(409, "User already exists");

  const newUser = new User({ username, password, fullname, email });
  await newUser.save();

  const safeUser = newUser.toObject();
  delete safeUser.password;

  return res
    .status(201)
    .json(new APIresp(201, safeUser, "User registered successfully"));
});

/* ---------- LOGIN ---------- */
const loginUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username && !email) {
    throw new Apierror(400, "Username or email is required");
  }

  const user = await User.findOne({ $or: [{ username }, { email }] });
  if (!user) throw new Apierror(404, "User not found");

  const isPasswordCorrect = await user.isPasswordCorrect(password);
  if (!isPasswordCorrect) throw new Apierror(401, "Invalid credentials");

  const { accessToken, refreshToken } =
    await generateAccessAndRefreshTokens(user._id);

  const safeUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  // 🧁 Cookies setup
  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, cookieOptions)
    .cookie("refreshToken", refreshToken, cookieOptions)
    .json(
      new APIresp(
        200,
        { user: safeUser, accessToken, refreshToken },
        "Login successful"
      )
    );
});

/* ---------- LOGOUT ---------- */
const logoutUser = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.user._id,
    { $unset: { refreshToken: "" } },
    { new: true }
  );
  if (!user) throw new Apierror(404, "User not found during logout");

  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  };

  return res
    .status(200)
    .clearCookie("accessToken", cookieOptions)
    .clearCookie("refreshToken", cookieOptions)
    .json(new APIresp(200, {}, "User logged out successfully"));
});

/* ---------- GET CURRENT USER ---------- */
const getme = asyncHandler(async (req, res) => {
  if (!req.user) throw new Apierror(401, "Unauthorized request");

  return res
    .status(200)
    .json(
      new APIresp(200, { user: req.user }, "User details fetched successfully")
    );
});

export { registerFunction, loginUser, logoutUser, getme };
