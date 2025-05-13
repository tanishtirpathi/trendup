import mongoose from "mongoose";

const userschema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    isAdmin: { type: Boolean, default: false },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullname: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: [true, "password is required "],
    },
    about: String,
    tivesin: String,
    worksAt: String,
    relationship: String,
    followers: [],
    following: [],
  },
  {
    timestamps: true,
  }
);


export const User = mongoose.model("User", userschema,"users");
    // avatar: {
    //   type: String,
    //   required: true,
    // },