import express from 'express'

const app: express.Application = express();

app.get('/', (req, res) => {
    res.send('all is okay');
});

app.listen(3000, () => console.log('server is in DEV mode'));