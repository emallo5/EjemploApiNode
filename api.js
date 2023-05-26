const express = require('express');
const app = express();
const port = 3000;

app.get('/api/data', (req, res) => {
  const data = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'México',
    intereses: ['programación', 'lectura', 'viajes'],
    trabajo: {
      empresa: 'ABC Inc.',
      puesto: 'Desarrollador'
    }
  };

  res.json(data);
});

app.listen(port, () => {
  console.log(`API mockeada disponible en http://localhost:${port}`);
});

