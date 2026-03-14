import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
            unique: true,
        },
        google_id: {
            type: String,
        },
        avatar: {
            type: String,
        },
        refreshToken: {
            type: String,
            select: false,
        },
    },
    { timestamps: true },
);
const UserModel = mongoose.model("User", userSchema);
export default UserModel;
