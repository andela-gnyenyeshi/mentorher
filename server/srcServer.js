import express from 'express';
import path from 'path';

const app = express();
const port = 4000;

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
    console.log('Listening on port: ' + port);
})