import { User } from "../modals/user.modal.js";
import { Apierror } from "../utils/APIerror.js";
import { APIresp } from "../utils/APIresp.js";

// 🔹 Get user profile
const getUserProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id)
      .select("-password -refreshToken")
      .populate("followers following", "username fullname avatar");

    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(new APIresp(200, user, "User profile fetched"));
  } catch (error) {
    res.status(500).json({ message: "Error fetching user profile", error });
  }
};

// 🔹 Follow user
const followUser = async (req, res) => {
  const { id } = req.params; // ID of user to follow
  const userId = req.user._id;

  if (id === userId.toString())
    return res.status(400).json({ message: "You cannot follow yourself" });

  try {
    const userToFollow = await User.findById(id);
    const currentUser = await User.findById(userId);

    if (!userToFollow || !currentUser)
      return res.status(404).json({ message: "User not found" });

    if (currentUser.following.includes(id)) {
      return res.status(400).json({ message: "Already following this user" });
    }

    userToFollow.followers.push(userId);
    currentUser.following.push(id);

    await userToFollow.save();
    await currentUser.save();

    res.status(200).json({ message: "User followed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error following user", error });
  }
};

// 🔹 Unfollow user
const unfollowUser = async (req, res) => {
  const { id } = req.params;
  const userId = req.user._id;

  try {
    const userToUnfollow = await User.findById(id);
    const currentUser = await User.findById(userId);

    if (!userToUnfollow || !currentUser)
      return res.status(404).json({ message: "User not found" });

    userToUnfollow.followers = userToUnfollow.followers.filter(
      (uid) => uid.toString() !== userId.toString()
    );
    currentUser.following = currentUser.following.filter(
      (uid) => uid.toString() !== id
    );

    await userToUnfollow.save();
    await currentUser.save();

    res.status(200).json({ message: "User unfollowed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error unfollowing user", error });
  }
};
// 🔹 Get all users (for discovery or admin)
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
      .select("-password -refreshToken")
      .populate("followers following", "username fullname avatar");
    res.status(200).json(new APIresp(200, users, "All users fetched successfully"));
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};

export { getAllUsers , getUserProfile, followUser, unfollowUser };
