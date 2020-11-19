import Router from 'express';

import user from './user.routes';
import token from './token.routes';
import userBooks from './user-books.routes';

const router = Router();

router.use('/users', user);
router.use('/user-books', userBooks);
router.use('/token', token);

export default router;
