import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Users } from './users.js';

const app = express();
app.use(cors());
dotenv.config();

app.get('/', (req, res) => {
  const { q } = req.query;
  const keys = ['first_name', 'last_name', 'email'];
  //console.log('Query is ' + q);

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(q))
    );
  };

  //res.json(Users);
  //res.json(Users.splice(0, 10));
  res.json(search(Users).splice(0, 10));
});

const PORT = process.env.PORT || 6531;
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}!!!`));
