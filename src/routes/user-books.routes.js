import Router from 'express';
import UserBookController from '../controllers/UserBookController';

const router = Router();

router.post('/', UserBookController.store);

export default router;
