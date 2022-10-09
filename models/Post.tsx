import mongoose, { Schema, model } from 'mongoose';

interface IPost {
    title: string;
    description: string;
    keywords: string;
    postDate: Date;
    image: string;
    content: string;
    authourName: string;

}

const postSchema = new Schema<IPost>({
    title: {type: String, required: true},
    description: {type: String},
    keywords: {type: String},
    postDate: {type: Date, required: true},
    image:{type: String},
    content:{type: String, required: true},
    authourName:{type: String, required: true}
})



module.exports = mongoose.models.Post || mongoose.model('Post', postSchema)