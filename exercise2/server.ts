import express, { Request, Response } from 'express';
import cors from 'cors';

function isPrime(num: number): boolean {
    for(let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
        if(num % i === 0) return false;
    return num > 1;
}

function generatePrimes(n: number): number[] {
    const primes: number[] = [];
    let num = 2; 
    while(primes.length < n) {
        if(isPrime(num)) {
            primes.push(num);
        }
        num++;
    }
    return primes;
}

const app = express();

app.use(cors());

app.get('/primes/:n', (req: Request, res: Response) => {
    const n = Number(req.params.n);
    if(isNaN(n) || n < 1){
        res.status(400).json({ error: 'Invalid input! Please provide a positive integer.' });
    } else {
        res.json({ result: generatePrimes(n) });
    }
});

app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
