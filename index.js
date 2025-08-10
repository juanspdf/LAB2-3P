const express = require('express');
const app = express();
const port = process.env.PORT ;

//endpoint que responde con un mensaje
app.get('/', (req, res) => {
  res.send('¡Integracion continua funcionando!');
});
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

module.exports = app;