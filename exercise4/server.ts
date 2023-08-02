import express, { Request, Response } from 'express';
import cors from 'cors';

function isPalindrome(word: string): boolean {
    const lowerCaseWord = word.toLowerCase();
    const reversedWord = lowerCaseWord.split('').reverse().join('');
    return lowerCaseWord === reversedWord;
}

const app = express();

app.use(cors());

app.get('/palindrome/:word', (req: Request, res: Response) => {
    const word = req.params.word;
    res.json({ result: isPalindrome(word) });
});

app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
