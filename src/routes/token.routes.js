import Router from 'express';

import TokenController from '../controllers/TokenController';

const router = Router();

router.get('/verify', TokenController.update);
router.get('/unknown', TokenController.delete);

export default router;
