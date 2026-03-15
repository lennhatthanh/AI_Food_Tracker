import mongoose from "mongoose";

const MealItemSchema = new mongoose.Schema({
    meal_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Meal",
        require: true,
    },
    food_name: {
        type: String,
        require: true
    },
    weight_g: {
        type: Number,
    },
    calories: {
        type: Number,
    },
    protein: {
        type: Number,
    },
    carbs: {
        type: Number,
    },
    fat: {
        type: Number,
    },
});

const MealItemModel = mongoose.model("MealItem", MealItemSchema);

export default MealItemModel;
