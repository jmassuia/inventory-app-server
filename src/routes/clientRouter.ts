import { Router } from 'express';
import { AuthController } from '../controllers/AuthController';
import { ClientController } from '../controllers/ClientController';

const router = Router();

router.get('/',new ClientController().index);
router.post('/',new ClientController().create);

router.post('/login',new AuthController().login)

export default router;