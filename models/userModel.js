const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type:String,
        required:[true,'Name is required']
    },
    email: { type: String, unique: true },
    password: String,
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);