const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "First name is required"],
      minlength: [6, "First name must be at least 6 characters long"]
    },
    last_name: {
      type: String,
      required: [true, "Last name is required"],
      maxlength: [20, "Last name must be at least 6 characters long"]
    },
    age: {
      type: Number,
      min: [1, "You must be at least 1 or older to register"],
      max: [150, "You must be at most 149 years old to register"]
    },
    email: { type: String, required: [true, "Email is required"] }
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
