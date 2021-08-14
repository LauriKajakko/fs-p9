import express from 'express';
import { createPatient, getPublicPatients } from '../services/patients';
import { toNewPatient } from '../utils/patientParser';

const router = express.Router();
router.get('/', (_req, res) => res.send(getPublicPatients()));
router.post('/', (req, res) => res.json(createPatient(toNewPatient(req.body))));

export default router;