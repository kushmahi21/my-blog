import mongoose from 'mongoose'

const MONGOODB_URL = process.env.MONGOODB_URL

if(!MONGOODB_URL) {
    throw new Error()
}

let cached = global.mongoose
if(!cached){
    cached = global.mongoose = {
        conn: null,
        promise: null,
    }
}

async function dbConnect() {
    if(cached.conn){
        return cached.conn
    }
    if(!cached.promise){
        const opts = {
            bufferCommands: false,
        }
        cached.promise = mongoose.connect(MONGOODB_URL, opts).then((mongoose) => {
            return mongoose
        })
    }
    cached.conn = await cached.promise
    return cached.conn
}

export default dbConnect