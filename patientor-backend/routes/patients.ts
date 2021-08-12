import express from 'express';
import { getPublicPatients } from '../services/patients';

const router = express.Router();

router.get('/', (_req, res) => res.send(getPublicPatients()));

export default router;