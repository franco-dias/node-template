import Router from 'express';

import UserController from '../controllers/UserController';

const router = Router();

router.get('/', UserController.list);
router.post('/', UserController.store);

export default router;
