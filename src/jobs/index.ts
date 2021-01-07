import { CronJob } from 'cron';

import GetPipedriveDeals from './GetPipedriveDeals';

const job = new CronJob(
	'1 * * * * *',
	async () => {
		console.log(await GetPipedriveDeals());
	},
	null,
	true,
	'America/Sao_Paulo'
);

export default job;