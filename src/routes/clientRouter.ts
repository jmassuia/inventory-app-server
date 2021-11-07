import { Router } from 'express';
import { AuthController } from '../controllers/AuthController';
import { ClientController } from '../controllers/ClientController';
import { Protect } from '../middleware/Protect';
import { RestrictTo } from '../middleware/RestrictTo';
const router = Router();

//List all available clients
router.get('/',new Protect().execute,new ClientController().index);

//Create clients
router.post('/',new ClientController().create);

//Update clients | Restrict to system administrator
router.patch('/:id',
 new Protect().execute,
 new RestrictTo().execute('admin'),
 new ClientController().update);

//Update account
router.patch('/me/:id',
 new Protect().execute,
 new ClientController().updateMe);


//Delete client
router.delete('/:id',
 new Protect().execute,
 new RestrictTo().execute('admin'),
 new ClientController().remove);

router.post('/login',new AuthController().login);

export default router;