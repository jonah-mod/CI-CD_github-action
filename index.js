    const express = require('express');
    const app = express();
    const port = 3000;

    app.get('/', (req, res) => {
      res.send('<h1>This is a Sub-Domain for my NodeJS projects<h1>');
    });

    app.listen(port, () => {
      console.log(`Example app listening on port 91.212.174.236:${port}`);
    });
