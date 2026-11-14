const express = require("express");
const cors = require("cors");

const app = express();

// Render asigna el puerto en process.env.PORT; 3000 es el respaldo local.
const PORT = process.env.PORT || 3000;

// CORS habilitado para que el frontend (otro dominio) pueda consumir la API.
app.use(cors());

app.get("/test", (req, res) => {
  res.status(200).json({
    success: true,
    status: 200,
    message: "API funcionando correctamente",
    data: {
      estudiante: "Sergio Marco Antonio Gómez Toma",
      carne: "19579",
      curso: "Despliegue web",
      campus: "UVG Campus Altiplano",
      tecnologia: "Node.js + Express",
      plataforma: "Render",
    },
    // Se genera en cada petición.
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`API escuchando en el puerto ${PORT}`);
});
