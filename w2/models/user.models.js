require('dotenv').config();
import mongoose, { mongo } from 'mongoose';
const url = process.env.DB_URL;
const Schema = mongoose.Schema;
mongoose.connect(url, { useNewUrlParser: true });
const UserSchema = new Schema({
    name: String,
    age: Number,
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        token: String,
        required: true,
        min: [8, 'Minimum password is 8 characters']
    }
});
const User = mongoose.model('User', UserSchema);
export default User;
