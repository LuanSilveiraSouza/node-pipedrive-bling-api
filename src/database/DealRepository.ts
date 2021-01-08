import { Collection } from 'mongodb';
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
};

export default DealRepository;
