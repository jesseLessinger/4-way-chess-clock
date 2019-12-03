const express = require('express');
const app = express();

const PORT = process.env.WEBSERVER_PORT || 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, '../four-way-chess-clock/dist/four-way-chess-clock')));


// app.get('/', (req, res)=>{
//   res.send('yuurrrooo')
// });

app.listen(PORT, ()=>{ console.log('server listening on... ' + PORT)});