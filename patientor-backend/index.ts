import express from 'express';
import cors from 'cors';

import diagnoses from './routes/diagnoses';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3001;

app.use('/api/diagnoses', diagnoses);

app.get('/api/ping', (_req, res) => {
  res.send('pong');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});