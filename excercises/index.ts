import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { calculateExcercises } from './excerciseCalculator';

const PORT = 3003;
const app = express();
app.use(express.json());

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
    height: Number(height),
    weight: Number(weight),
    bmi,
  });
});

type exercises = {
  daily_exercises: Array<number>,
  target: number,
};

app.post('/exercises', (req, res) => {
  const { daily_exercises, target } = req.body as exercises;

  if (!daily_exercises || !target) {
    res.status(400).json({ error: 'parameters missing' });
  }

  if (isNaN(target) || !daily_exercises.every((val) => !isNaN(val))) {
    res.status(400).json({ error: 'malformatted parameters'});
    return;
  }

  res.json(calculateExcercises(daily_exercises, target));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});