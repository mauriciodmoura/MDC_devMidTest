import express, { Request, Response } from 'express';
import cors from 'cors';

function factorial(n: number): number {
    let result = 1;
    for(let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

const app = express();

app.use(cors());

app.get('/factorial/:n', (req: Request, res: Response) => {
    const n = Number(req.params.n);
    if(isNaN(n) || n < 0){
        res.status(400).json({ error: 'Invalid input! Please provide a non-negative integer.' });
    } else {
        res.json({ result: factorial(n) });
    }
});

app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
