import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
    {
        task:{
            type:String,
            required:[true, "Task Name is required"],
            trim:true,
        },
        completed:{
            type:Boolean,
            default:false,
        },
        timestamps:true,
    }
);

const Todo = mongoose.model("Todo", todoSchema);
