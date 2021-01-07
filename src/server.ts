require('dotenv').config();
import express from 'express';

import { GetPipedriveDealsJob } from './jobs/GetPipedriveDeals';

const app = express();

app.get('/', (req, res) => {
	res.status(200).json({ msg: 'Hello World!' });
});

GetPipedriveDealsJob.start();

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
