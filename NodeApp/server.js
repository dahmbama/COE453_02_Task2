const express = require('express');
const app = express();

app.get('/add', (req, res) => {
    const x = Number(req.query.X)
    const y = Number(req.query.Y)
    const result = x + y
    res.send(JSON.stringify({
      "X": x,
      "Y": y,
      "Result": result
    }));
});

app.get('/sub', (req, res) => {
    const x = Number(req.query.X)
    const y = Number(req.query.Y)
    const result = x - y
    res.send(JSON.stringify({
      "X": x,
      "Y": y,
      "Result": result
    }));
});

app.get('/mul', (req, res) => {
    const x = Number(req.query.X)
    const y = Number(req.query.Y)
    const result = x * y
    res.send(JSON.stringify({
      "X": x,
      "Y": y,
      "Result": result
    }));
});

app.get('/div', (req, res) => {
    const x = Number(req.query.X)
    const y = Number(req.query.Y)
    const result = x / y
    res.send(JSON.stringify({
      "X": x,
      "Y": y,
      "Result": result
    }));
});

app.listen(8080, () => {
    console.log('Server is up on 8080');
    }
);