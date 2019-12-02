const app = require('express')();

const PORT = process.env.WEBSERVER_PORT || 3000;

app.listen(PORT, ()=>{ console.log('server listening on... ' + PORT)});