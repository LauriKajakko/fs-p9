const calculateBmi = (height: number, weight: number): string => {
  const bmi: number = weight / ((height / 100) ^ 2);
  switch (true) {
    case bmi < 18.5:
      return 'underweight';
    case bmi >= 18.5 && bmi <= 25:
      return 'Normal (healty weight)'; 
    case bmi > 25 && bmi <= 30:
      return 'overweight';
    case bmi > 30:
      return 'obese';
  };
};

console.log(calculateBmi(180, 74))