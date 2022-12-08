import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
        username: {
            type: String,
            required: true,
            unique: true,
        },

        password: {
            type: String,
            required: true,
        },

        posts: [{
            type: mongoose.Schema.Types.ObjectId, // посты по ID
            ref: 'Post', // то на что ссылается
        }, ],
    }, {
        timestamps: true
    }, // для даты создания поста
)

export default mongoose.model('User', UserSchema)