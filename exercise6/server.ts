import express, { Request, Response } from 'express';
import cors from 'cors';

function vowelCount(str: string): number {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

const app = express();

app.use(cors());

app.get('/vowels/:sentence', (req: Request, res: Response) => {
    const sentence = req.params.sentence;
    res.json({ result: vowelCount(sentence) });
});

app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
