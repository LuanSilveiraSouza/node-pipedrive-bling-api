import { CronJob } from 'cron';

import GetPipedriveDeals from './GetPipedriveDeals';
import DealRepository from '../database/DealRepository';
import PostBlingDeal from './PostBlingDeal';
import { IDeal } from '../types/deal';

const job = new CronJob(
	'1 * * * * *',
	async () => {
		const deals = await GetPipedriveDeals();

		deals.forEach(async (deal: IDeal) => {
			const inserted = await DealRepository.create(deals[0]);

			if (inserted) {
				await PostBlingDeal(deal);

				console.log('inserted ' + deal.id);
			}
		});
	},
	null,
	true,
	'America/Sao_Paulo'
);

export default job;
