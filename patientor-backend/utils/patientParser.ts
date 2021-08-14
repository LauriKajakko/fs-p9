import { NewPatient, Gender } from "../types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (gender: any): gender is Gender => Object.values(Gender).includes(gender);
const isString = (text: unknown): text is string => typeof text === 'string' || text instanceof String;
const isDate = (date: string): boolean => Boolean(Date.parse(date));
const isCorrectlyFormattedDate = (date: string): boolean => /\d{4}-[0-1]\d-[0-3]\d/.test(date);

const parseGender = (gender: unknown): Gender => {
  if (!gender || !isGender(gender)){
    throw TypeError('Incorrect or missing gender');
  }
  return gender;
};

const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date) || !isCorrectlyFormattedDate(date)) {
      throw new TypeError('Incorrect or missing date: ' + date);
  }
  return date;
};

const parseString = (value: unknown): string => {
  if (!value || !isString(value)) {
    throw new TypeError('Incorrect or missing value');
  }
  return value;
};

type Fields = { 
  name: unknown, 
  dateOfBirth: unknown,
  ssn: unknown, 
  gender: unknown,
  occupation: unknown,
};

export const toNewPatient = (
  {name, dateOfBirth, ssn, gender, occupation} : Fields
): NewPatient => ({
  name: parseString(name),
  dateOfBirth: parseDate(dateOfBirth),
  ssn: parseString(ssn),
  gender: parseGender(gender),
  occupation: parseString(occupation)
});
