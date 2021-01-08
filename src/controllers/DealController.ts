import { Request, Response } from 'express';
import DealRepository from '../database/DealRepository';

class DealController {
	static async list(request: Request, response: Response) {
		try {
			const deals = await DealRepository.list();

			if (deals.length > 0) {
				return response.status(200).json(deals);
			}
			return response.status(204).json();
		} catch (error) {
			return response.status(404).json();
		}
	}
}

export default DealController;
