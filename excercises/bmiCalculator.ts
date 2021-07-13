const calculateBmi = (height: number, weight: number): string => {
  const bmi: number = weight / ((height / 100) ^ 2);
  switch (true) {
    case bmi < 18.5:
      return 'underweight';
    case bmi >= 18.5 && bmi <= 25:
      return 'Normal (healty weight)'; 
    case bmi > 25 && bmi <= 30:
      return 'overweight';
    default:
      return 'obese';
  };
};

const height: number = Number (process.argv[2]);
const weight: number = Number (process.argv[3]);
if (isNaN(height) || isNaN(weight)) throw new Error('Provide height and weight as number arguments. Height first.');

console.log(calculateBmi(height, weight))