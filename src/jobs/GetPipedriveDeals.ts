import PipedriveApi from '../services/PipedriveApi';

import { IDeal } from '../types/deal';

const GetPipedriveDealsJob = async (): Promise<IDeal[]> => {
	let deals: IDeal[] = [];

	try {
		const response = await PipedriveApi.get(
			`/deals?api_token=${process.env.PIPEDRIVE_KEY}`
		);

		if (response.status === 200) {
			deals = response.data?.data
				.filter((deal: any) => deal.status === 'won')
				.map(
					(deal: any): IDeal => {
						return {
							id: deal.id,
							owner: deal.owner_name,
							person_name: deal.person_id?.name,
							person_email: deal.person_id?.email[0]?.value,
							person_phone: deal.person_id?.phone[0]?.value,
							price: deal.weighted_value,
							date: deal.update_time,
						};
					}
				);
		}
	} catch (error) {
		console.log(error);
	}

	return deals;
};

export default GetPipedriveDealsJob;
