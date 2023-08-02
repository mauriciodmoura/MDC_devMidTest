import express, { Request, Response } from 'express';
import cors from 'cors';

function multiplicationTable(num: number): Array<{ multiplier: number, result: number }> {
    let table = [];
    for (let i = 1; i <= 10; i++) {
        table.push({ multiplier: i, result: num * i });
    }
    return table;
}

const app = express();

app.use(cors());

app.get('/table/:num', (req: Request, res: Response) => {
    const num = Number(req.params.num);
    if(isNaN(num)){
        res.status(400).json({ error: 'Invalid input! Please provide a number.' });
    } else {
        res.json({ result: multiplicationTable(num) });
    }
});

app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
