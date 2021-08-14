import { v1 } from 'uuid';
import patientsData from '../data/patients.json';
import { Patient, PublicPatient, NewPatient } from '../types';

/* No db just runtime memory */
const patients: Array<Patient> = patientsData as Array<Patient>;

const getPublicPatients = (): Array<PublicPatient> => patients.map(({ ssn, ...rest }) => rest);

const createPatient = (patient: NewPatient) => {
  const newPatient = {
    id: v1(),
    ...patient,
  };
  patients.push(newPatient);
  return newPatient;
};

export { getPublicPatients, createPatient };