import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

function calculate(a: number, b: number, operator: string): number {
    switch(operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': 
            if(b === 0) throw new Error('Division by zero is not allowed.');
            return a / b;
        default: throw new Error('Invalid operator! Please use +, -, *, or /.');
    }
}

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/calculate', (req: Request, res: Response) => {
    try {
        const a = Number(req.body.a);
        const b = Number(req.body.b);
        const operator = req.body.operator;
        if(isNaN(a) || isNaN(b)){
            res.status(400).json({ error: 'Invalid input! Please provide two numbers.' });
        } else {
            res.json({ result: calculate(a, b, operator) });
        }
    } catch(error: any) {
        res.status(400).json({ error: error.message });
    }
});

app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
