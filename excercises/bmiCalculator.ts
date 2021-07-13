type bmi = 'underweight' | 'Normal (healthy weight)' | 'overweight' | 'obese';

export const calculateBmi = (height: number, weight: number): bmi => {
  const bmi: number = weight / ((height / 100) ^ 2);
  switch (true) {
    case bmi < 18.5:
      return 'underweight';
    case bmi >= 18.5 && bmi <= 25:
      return 'Normal (healthy weight)'; 
    case bmi > 25 && bmi <= 30:
      return 'overweight';
    default:
      return 'obese';
  }
};