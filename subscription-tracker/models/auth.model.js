import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
    
}, {timestamps: true});

const Auth = new mongoose.model('Auth', authSchema);

export default Auth;