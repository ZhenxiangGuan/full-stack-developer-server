import helloController
  from "./controllers/hello-controller.js";
import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import userController
  from "./controllers/user-controller.js";
import tuitController from "./controllers/tuits-controller.js";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://localhost:27017/webdev'
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors());
app.use(express.json());
userController(app);
tuitController(app);
helloController(app);
app.get('/', (req, res) => {
  res.send('Welcome to Full Stack Development!')})
app.listen(process.env.PORT || 4000);










