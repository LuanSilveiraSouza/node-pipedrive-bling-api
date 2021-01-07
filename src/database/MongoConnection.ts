import { MongoClient, Collection } from 'mongodb';
import DbConnection from './DbConnection';

const MongoConnection: DbConnection = {
	client: MongoClient,
	uri: '',

	async connect(user: string, pass: string, database: string) {
		this.uri = `mongodb+srv://${user}:${pass}@cluster0.9x3yg.mongodb.net/${database}?retryWrites=true&w=majority`;

		this.client = await MongoClient.connect(this.uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
	},

	async disconnect() {
		await this.client?.close();
	},

	async getCollection(name: string): Promise<Collection> {
		if (!this.client?.isConnected()) {
			this.client = await MongoClient.connect(this.uri, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			});
		}
		return this.client.db().collection(name);
	},
};

export default MongoConnection;
