import { CronJob } from 'cron';

import GetPipedriveDeals from './GetPipedriveDeals';
import DealRepository from '../database/DealRepository';
import PostBlingDeal from './PostBlingDeal';
import { IDeal } from '../types/deal';

const job = new CronJob(
	'0 0 */1 * * *',
	async () => {
		const deals = await GetPipedriveDeals();

		await Promise.all(deals.map(async (deal: IDeal) => {
			const inserted = await DealRepository.create(deal);

			if (inserted) {
				await PostBlingDeal(deal);
			}
		}));
	},
	null,
	true,
	'America/Sao_Paulo'
);

export default job;
