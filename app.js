const express = require('express');
const app = express();
const PORT = 3000; // You can change the port if needed

app.get('/', (req, res) => {
  res.send('Hello World from my Node.js server!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});