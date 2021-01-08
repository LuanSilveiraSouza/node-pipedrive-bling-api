import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import router from './routes';

const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

app.use('/api/v1', router);

export default app;
