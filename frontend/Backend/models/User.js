const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const Schema = mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      unique: true,
      required: true,
    },
    Password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

Schema.pre("save", async function (next) {
  if (!this.isModified("Password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.Password = await bcrypt.hash(this.Password, salt);
});
Schema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.Password);
};
const User = mongoose.model("User", Schema);

module.exports = User;
