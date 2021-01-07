require('dotenv').config();
import express from 'express';
import MongoConnection from './database/MongoConnection';
import job from './jobs';

MongoConnection
	.connect(
		process.env.MONGO_USER || '',
		encodeURIComponent(process.env.MONGO_PASS || ''),
		process.env.MONGO_DATABASE || ''
	)
	.then(() => {
		const app = express();

		app.get('/', (req, res) => {
			res.status(200).json({ msg: 'Hello World!' });
		});

		job.start();

		const PORT = process.env.PORT || 3030;

		app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
	})
	.catch((error) => console.error(error));
