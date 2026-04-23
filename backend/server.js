import express from 'express';

//app config
const app = express();
const port = process.env.PORT || 4000;

//middlewares
app.use(express.json());

//api endpoints

app.listen(port, () => console.log('Server Started', port));
