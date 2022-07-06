import mongoose from "mongoose";

const mongoConnect = () => {
  mongoose.connect('mongodb://localhost:27017/dall', {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });

  mongoose.connection
    .once('open', () => console.log('Database Connected :-)'))
    .on('error', (error) => {
      console.log('Error ', error);
    });
}

export default mongoConnect;
