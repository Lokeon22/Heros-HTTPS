require("express-async-errors");
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const port = 8080;

app.get("/azapfy-heros", async (req, res) => {
  try {
    const response = await axios.get(
      "http://homologacao3.azapfy.com.br/api/ps/metahumans"
    );
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar dados da API externa." });
  }
});

app.listen(port, () => {
  console.log(`Server proxy https ${port}`);
});
