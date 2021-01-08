import { Collection } from 'mongodb';
import { IDeal, IDealQuery } from '../types/deal';
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

	async list(query?: IDealQuery): Promise<any[]> {
		const dealCollection: Collection = await MongoConnection.getCollection(
			'deals'
		);

		try {
			let deals;

			if (!query || Object.keys(query).length === 0) {
				deals = await dealCollection.find({}).toArray();
			} else {
				const _id: IDealQuery = {};
				query.price === 'true' ? (_id.price = '$price') : null;
				query.date === 'true' ? (_id.date = '$date') : null;

				deals = await dealCollection
					.aggregate([
						{
							$group: {
								_id,
								deals: { $push: '$$ROOT' },
							},
						},
					])
					.toArray();
			}

			return deals;
		} catch (error) {
			console.log(error);
			return [];
		}
	},
};

export default DealRepository;
