import express from 'express';
import cors from 'cors';

import diagnoses from './routes/diagnoses';
import patients from './routes/patients';
import errorhandler from './utils/errorhandler';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3001;

app.use('/api/diagnoses', diagnoses);
app.use('/api/patients', patients);

app.get('/api/ping', (_req, res) => {
  res.send('pong');
});

app.use(errorhandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});