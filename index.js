    const express = require('express');
    const path = require('path');
    const app = express();
    const port = 3000;

    app.use('/images', express.static(path.join(__dirname, 'public', 'images'), {
  	maxAge: '30d', // Cache for 30 days
  	immutable: true // For immutable resources
}));

    app.get('/', (req, res) => {
      //res.send('<h1>This is a Sub-Domain for my NodeJS projects<h1>');
      res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });



// Middleware to get client IP
app.use((req, res, next) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    req.clientIp = ip;
    next();
});

// Route to display IP
app.get('/myip', (req, res) => {
    res.send(`Your IP address is: ${req.clientIp}`);
});


    app.listen(port, () => {
      console.log(`Example app listening on port:${port}`);
    });

app.use((req, res, next) => {
  	res.status(404).render('404', { title: 'Page Not Found' });
});

app.use((err, req, res, next) => {
  	console.error(err.stack);
	const statusCode = err.statusCode || 500;
  	const message = err.message || 'Something went wrong!';
	res.status(statusCode).render('error', { title: 'Error', message });
});
