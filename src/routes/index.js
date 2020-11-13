import Router from 'express';

import user from './user.routes';
import userBooks from './user-books.routes';

const router = Router();

router.use('/users', user);
router.use('/user-books', userBooks);

export default router;
