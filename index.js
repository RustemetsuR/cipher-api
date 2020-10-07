const express = require('express');
const cipher = require('./app/cipher');
const cors = require("cors");
const app = express();
const port = 8000;

app.use(cors());

app.use(express.json());
app.use("/cipher", cipher);

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });