import express from 'express';
import bodyParser from 'body-parser';
import mongoConnect from './config/mongodb.config';
import authRoutes from './routers/user.routes';
import productRoutes from './routers/product.routes';
import transRoutes from './routers/transaction.routes';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: '*/*'}));

const port = process.env.PORT || 3000;


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  return next();
});

app.use('/api', authRoutes);
app.use('/api', productRoutes);
app.use('/api', transRoutes);

app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Welcome on dall'
  });
});

app.use((req, res) => {
  res.type('json').status(404).json({
    message: '404 Endpoint not found',
    status: 404
  });
});

app.listen(port ,() => console.log('App is listening on port 3000'));
mongoConnect();

export default app;
