const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, "Must use a valid email address"],
        },
        password: {
            type: String,
            required: true,
        },
        type: {
            type: String,
        },
        careType: {
            type: String,
        },
        timeType: {
            type: String
        },
        experienceYears: {
            type: String
        },
        firstName: {
            type: String
        },
        lastName: {
            type: String
        },
        zipcode: {
            type: String
        },
        type: {
            type: String,
        }
        
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

// user password will be hashed here 
userSchema.pre("save", async function (next) {
    if (this.isNew || this.isModified("password")) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// This method will compare password using bcrypt 
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;