type rating = 1 | 2 | 3;
type ratingDescription = 'bad' | 'ok' | 'good';

interface excerciseFeedBack {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: rating,
  ratingDescription: ratingDescription,
  target: number,
  average: number,
}

const computeRating = (average: number, target: number): rating => {
  switch (true) {
    case average < target:
      return 1;
    case average === target:
      return 2;
    case average > target:
      return 3
  }
};
const computeRatingDescription = (rating: rating): ratingDescription => {
  switch (rating) {
    case 1:
      return 'bad';
    case 2:
      return 'ok';
    case 3:
      return 'good';
  }
};

const calculateExcercises = (hours: Array<number>, target: number): excerciseFeedBack => {
  const average = hours.reduce((acc, curr) => acc + curr) / hours.length;
  const success = average >= target;
  const rating = computeRating(average, target);
  const ratingDescription = computeRatingDescription(rating);
  return(
    {
      periodLength: hours.length,
      trainingDays: hours.filter((val) => val !== 0).length,
      average,
      success,
      rating,
      ratingDescription,
      target,
    }
  );
};

console.log(calculateExcercises([3, 0, 2, 4.5, 0, 3, 1], 2))
