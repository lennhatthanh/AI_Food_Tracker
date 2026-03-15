import mongoose from "mongoose";

const MealSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true,
    },
    meal_type: {
        type: String,
        enum: ["Breakfast", "Lunch", "Dinner", "Snack"],
    },
    image_meal: {
        type: String,
    },
    total_calories: {
        type: Number,
    },
    total_protein: {
        type: Number,
    },
    total_carbs: {
        type: Number,
    },
    total_fat: {
        type: Number,
    },
    eat_day: {
        type: Date,
    },
});

const MealModel = mongoose.model("Meal", MealSchema);

export default MealModel;
