import { CronJob } from 'cron';
import PipedriveApi from '../services/PipedriveApi';

export const GetPipedriveDealsJob = new CronJob(
	'0 * * * * *',
	async () => {
		console.log('Pipedrive CronJob');

		try {
			const response = await PipedriveApi.get(
				`/deals?api_token=${process.env.PIPEDRIVE_KEY}`
			);

			if (response.status === 200) {
				console.log(response.data?.data);
			}
		} catch (error) {
			console.log(error);
		}
	},
	null,
	true,
	'America/Sao_Paulo'
);
