const { Schema, model } = require('mongoose');

const jobPostSchema = new Schema(
  {
    parentId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    carerId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    jobStatus: {
      type: String, // PENDING, REJECTED, ACCEPTED
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const JobPost = model('JobPost', jobPostSchema);

module.exports = JobPost;