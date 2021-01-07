import { MongoClient } from 'mongodb';
import DbConnection from './DbConnection';

class MongoConnection implements DbConnection {
	client: MongoClient | null;

	constructor() {
		this.client = null;
	}

	async connect(user: string, pass: string, database: string) {
		this.client = await MongoClient.connect(
			`mongodb+srv://${user}:${pass}@cluster0.9x3yg.mongodb.net/${database}?retryWrites=true&w=majority`,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}
		);
	}

	async disconnect() {
		await this.client?.close();
	}
}

export default MongoConnection;
