import express, { Request, Response } from 'express';
import cors from 'cors';

function calculateFinalValue(capital: number, interestRate: number, months: number): number {
    return capital * Math.pow(1 + interestRate / 100, months);
}

const app = express();

app.use(cors());

app.get('/investment/:capital/:interestRate/:months', (req: Request, res: Response) => {
    const capital = Number(req.params.capital);
    const interestRate = Number(req.params.interestRate);
    const months = Number(req.params.months);
    if(isNaN(capital) || isNaN(interestRate) || isNaN(months)){
        res.status(400).json({ error: 'Invalid input! Please provide valid values.' });
    } else {
        res.json({ result: calculateFinalValue(capital, interestRate, months) });
    }
});

app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
