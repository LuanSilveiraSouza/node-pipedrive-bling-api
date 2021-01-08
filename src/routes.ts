import { Router } from 'express';
import DealController from './controllers/DealController';

const router = Router();

router.get('/deals', DealController.list);

export default router;
