const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: {
            type: String,
            required: true,
            minLength: [6, "The password must contain at least 6 characters"]
        }
    }
);

userSchema.pre("save", async function name(next) {
    if (!this.isModified("password")) return next()
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.pre("findOneAndUpdate", async function (next) {
    this.options.runValidators = true;

    const update = this.getUpdate();

    if (update && update.password) {

        if (update.password.length < 6) {
            return next(new Error("The password must contain at least 6 characters"));
        }

        const salt = await bcrypt.genSalt(10);
        update.password = await bcrypt.hash(update.password, salt);

        this.setUpdate(update);
    }

    next();
});

userSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;