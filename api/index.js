import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Users } from './users.js';

const app = express();
app.use(cors());
dotenv.config();

app.get('/', (req, res) => {
  res.json(Users.splice(0, 10));
});

const PORT = process.env.PORT || 6531;
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}!!!`));
