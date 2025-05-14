import { User } from "../modals/user.modal.js";    
import { Apierror } from "../utils/APIerror.js";
import { APIresp } from "../utils/APIresp.js"; // Assuming you have this
import jwt from "jsonwebtoken"; // Required for token generation

// REGISTER FUNCTION
const registerFunction = async (req, res) => {
  const { username, password, fullname, email } = req.body;

  try {
    const newUser = new User({ username, password, fullname, email });
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// LOGIN FUNCTION
const loginUser = async (req, res) => {
  const { username, email, password } = req.body || {};

  try {
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

    const loggedInUser = await User.findById(user._id).select("-password");

    const options = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    };

    res
      .status(200)
      .json(    
        new APIresp(
          200,
          {
            user: loggedInUser,

          },
          "User logged in successfully"
        )
      );
  } catch (error) {
    const status = error.statusCode || 500;
    res.status(status).json({ message: error.message });
  }
};

export { registerFunction, loginUser };
