const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const indexRouter = require('./routes/index');
const urlRouter = require('./routes/url');

const PORT = process.env.PORT;
const app = express();

mongoose
  .connect(process.env.MONGODB_URI, { dbName: 'urlShortner' })
  .then(() => {
    console.log('Connected to DB');
  });

app.use(express.json());

app.use('/', indexRouter);
app.use('/api/v1', urlRouter);

app.listen(PORT, () => {
  console.log('Server is listening on port :', PORT);
});
