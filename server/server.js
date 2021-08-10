mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/tinytreasurecare',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
  );