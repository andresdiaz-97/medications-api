const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Por favor añade un nombre de usuario"],
    },
    email: {
      type: String,
      required: [true, "Por favor añade un correo electronico"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Por favor añade una contraseña"],
    },
    role: {
      type: String,
      enum: ["user"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
