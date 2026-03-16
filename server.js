// server.js – API pronta com CORS

const express = require("express");
const cors = require("cors");

const app = express();

// Permitir requisições de qualquer origem (frontend pode acessar)
app.use(cors());

// Porta do servidor (Render ou local)
const PORT = process.env.PORT || 3000;

// Rota principal da API
app.get("/", (req, res) => {
  res.json({
    mensagem: "API funcionando na NUVEM 🚀",
    status: "online"
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
