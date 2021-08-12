import patientsData from '../data/patients.json';

import { Patient, PublicPatient } from '../types';

const patients: Array<Patient> = patientsData as Array<Patient>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getPublicPatients = (): PublicPatient[] => patients.map(({ ssn, ...rest }) => rest);

export { getPublicPatients };