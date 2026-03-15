import mongoose from "mongoose";

const MealSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true,
    },

    current_weight: {
        type: Number,
    },
    target_weight: {
        type: Number,
    },
    height: {
        type: Number,
    },
    primary_goal: {
        type: String,
        enum: ["lose", "maintain", "build"],
    },
    activity_level: {
        type: String,
        enum: ["sedentary", "light", "active", "very_active"],
    },
    daily_calories_goal: {
        type: Number,
    },
});

const MealModel = mongoose.model("Meal", MealSchema);

export default MealModel;
