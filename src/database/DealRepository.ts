import { Collection } from 'mongodb';
import { cursorTo } from 'readline';
import { IDeal } from '../types/deal';
import MongoConnection from './MongoConnection';

const DealRepository = {
	async create(deal: IDeal): Promise<boolean> {
		const dealCollection: Collection = await MongoConnection.getCollection(
			'deals'
		);

		try {
			const dealExist = await dealCollection.findOne({ id: deal.id });

			if (!dealExist) {
				const result = await dealCollection?.insertOne(deal);

				return result.insertedCount > 0;
			}

			return false;
		} catch (error) {
			return false;
		}
	},

	async list(): Promise<any[]> {
		const dealCollection: Collection = await MongoConnection.getCollection(
			'deals'
		);

		try {
			const deals = await dealCollection.find({}).toArray();

			console.log(deals);

			return deals;
		} catch (error) {
			console.log(error);
			return [];
		}
	}
};

export default DealRepository;
