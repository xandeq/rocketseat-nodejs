const express = require('express')

// inicializa
const app = express();

app.get('/', (req, res) => {
    res.send("Hello Rocketseat")
})

// escuta na porta 3001
app.listen(3001);
