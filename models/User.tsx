// import mongoose from 'mongoose'

// const userSchema = new mongoose.Schema({
//     name:{
//         type: String,
//         required: true,
//         maxlength: 20,
//     },
//     surname: {
//         type: String,
//         required: true,
//         maxlength: 30,
//     },
//     mobile: {
//         type: Number,
//         required: true,
//         maxlength: 10
//     },
//     email: {
//         type: String,
//         required: true,
//     },
//     password: {
//         type: String,
//         required: true,
//         maxlength: 70
//     },
// },
//     {
//         timestamps: true
//     },
// );

// export default mongoose.models.User || mongoose.model("User",userSchema);

/* module.exports = mongoose.models.User || mongoose.model('User', userSchema) */


import mongoose, { Schema, model } from 'mongoose';

interface IUser {
    name: string;
    surname: string;
    mobile: number;
    email: string;
    password: string;

}

const userSchema = new Schema<IUser>({
    name: {type: String, required: true},
    surname: {type: String, required: true},
    mobile: {type: Number, required: true},
    email: {type: String, required: true},
    password:{type: String,required: true},
})



module.exports = mongoose.models.User || mongoose.model('User', userSchema)