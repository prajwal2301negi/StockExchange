import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter name"],
      minLength: [3, "Name must contain atleast 3 characters"],
      maxLength: [30, "Name must not exceed 30 characters"],
      validate:[validator.isAlphanumeric,"Please Enter valid caharacters. Use Alphabets and numbers only"]
    },
    gender: {
      type: String,
      required: true,
      enum: {
        values: ["Male", "Female", "Others"],
        message: "Please select gender",
      },
    },
    avatar: {
      public_id: String,
      url: String,
    },
    phone: {
      type: String,
      minLength: [10, "Phone Number must be 10 digit"],
      validate:[validator.isMobilePhone,"Enter a valid Phone Number"],
    },
    email: {
      type: String,
      validate:[validator.isEmail,'Enter a valid email'],
      unique:true,
    },
    password: {
      type: String,
      minLength: [8, "Password must be atleast 8 characters"],
      validate:[validator.isStrongPassword,"Enter a strong Password"],
    },
    token: {
      type: String,
    },
    role: {
      type: String,
      enum: ["Admin", "User"],
    },
    balance:{
      type:Number,
      default:100,
    },
    stock:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Stock",
    },
  },
  { timestamps: true }
);

const user = mongoose.model("User", userSchema);
export default user;
