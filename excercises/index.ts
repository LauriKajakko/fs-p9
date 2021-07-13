import express from 'express';
import { calculateBmi } from './bmiCalculator';

const PORT = 3003;
const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello FullStack');
});

app.get('/bmi', (req, res) => {
  const {
    height,
    weight,
  } = req.query;
  
  if (!height || !weight) {
    res.status(400).json({ error: 'give height and weight as query params' });
    return;
  }
  if (isNaN(Number(height)) || isNaN(Number(weight))) {
    res.status(400).json({ error: 'malformatted parameters' });
    return;
  }

  const bmi = calculateBmi(Number(height), Number(weight)); 
  res.json({
    height,
    weight,
    bmi,
  });
  
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});