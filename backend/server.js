import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectDB } from './config/db.js';
import userRouter from './routes/userRoute.js';

//app config
const app = express();
const port = process.env.PORT || 4000;

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//DB Connect
connectDB();

//Routes
app.use('/api/user', userRouter);

app.get('/', (req, res) => {
  res.send('API Working');
});

app.listen(port, () =>
  console.log(`Server Started on http://localhost:${port}`),
);
