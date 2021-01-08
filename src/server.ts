require('dotenv').config();
import MongoConnection from './database/MongoConnection';
import app from './app';
import job from './jobs';

MongoConnection
	.connect(
		process.env.MONGO_USER || '',
		encodeURIComponent(process.env.MONGO_PASS || ''),
		process.env.MONGO_DATABASE || ''
	)
	.then(() => {
		job.start();

		const PORT = process.env.PORT || 3030;

		app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
	})
	.catch((error) => console.error(error)); 
