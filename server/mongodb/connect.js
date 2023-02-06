import mongoose from 'mongoose';

const connectDb = (url) => {
  mongoose.set('strictQuery', true);

  mongoose.connect(url);

  mongoose
    .connect(url)
    .then(() => console.log('Mongoose connected'))
    .catch((err) => console.log(err));
};

export default connectDb;
