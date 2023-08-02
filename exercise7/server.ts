import express, { Request, Response } from 'express';
import cors from 'cors';

function calculateAverage(grade1: number, grade2: number, grade3: number): number {
    return (grade1 + grade2 + grade3) / 3;
}

const app = express();

app.use(cors());

app.get('/average/:grade1/:grade2/:grade3', (req: Request, res: Response) => {
    const grade1 = Number(req.params.grade1);
    const grade2 = Number(req.params.grade2);
    const grade3 = Number(req.params.grade3);
    if(isNaN(grade1) || isNaN(grade2) || isNaN(grade3)){
        res.status(400).json({ error: 'Invalid input! Please provide three grades.' });
    } else {
        res.json({ result: calculateAverage(grade1, grade2, grade3) });
    }
});

app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
