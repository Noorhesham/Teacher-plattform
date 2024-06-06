import { Schema } from "mongoose";

const user=new Schema({
    name:{type:String,required:[true,'Name must be provided ...']}
})