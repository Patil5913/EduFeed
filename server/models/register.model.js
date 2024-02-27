const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const registerDataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    prn: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    branch: { type: String, required: true },
    yearofjoining: { type: String, required: true },
    role: { type: String, required: true },
    isadmin: { type: Boolean, default: false },
    tokens : [
        {
            token: {
                type: String,
                required: true,
            },
        },
    ],
});
registerDataSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, "3d02259de9d846fc4b9b9ea990ae8dccd797c8a3e147c051ae9f0a8cc4e783522ede2bcb798fb015e87049f1d64bf5a84c6cd87f91b4fdd4703cd42b29ff0e10", { expiresIn: '30d' } );
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (error) {
        console.error("Error during token generation:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

const userData = mongoose.model('userdata', registerDataSchema);

module.exports = userData;