import express, {Application, Request, Response, NextFunction} from 'express'

const app: Application = express();

app.get('/', (req:Request, res:Response, next: NextFunction) => {
    res.send('all is okay');
});

app.listen(3000, () => console.log('server is in DEV mode'));