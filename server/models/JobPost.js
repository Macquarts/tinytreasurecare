const { Schema, model } = require("mongoose");

const jobPostSchema = new Schema(
    {
        parentId: {
            type: String
        },
        carerId: {
            type: String
        }, 
        jobStatus: {
            type: String, // PENDING, REJECTED, ACCEPTED

        }
        
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);


const JobPost = model("JobPost", jobPostSchema);

module.exports = JobPost