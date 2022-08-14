import mongoose from "mongoose";

const mongoConnect = () => {
  mongoose.connect('mongodb+srv://umhuda8:kigali123@cluster0.msb3g.mongodb.net/?retryWrites=true&w=majority', {
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
