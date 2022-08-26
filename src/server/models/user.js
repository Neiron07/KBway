import mongoose from "mongoose";

const User = new mongoose.Schema({
    id: {type: Number, required: true},
    username: {type: String, required: true},
    first_name: {type: String, required: true},
    date: {type: Date, required: false}
})

export default mongoose.model('User', User);