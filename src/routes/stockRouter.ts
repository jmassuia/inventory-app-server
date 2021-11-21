import { Router } from 'express';
import { StockController } from '../controllers/StockController';
import { Protect } from '../middleware/Protect';
import { RestrictTo } from '../middleware/RestrictTo';
const router = Router();

router.get('/', 
    new Protect().execute,
    new StockController().index)

router.post('/',new StockController().create)

router.patch('/:id',
    new Protect().execute, 
    new RestrictTo().execute('admin'),
    new StockController().update)

router.delete('/:id',
    new Protect().execute,
    new RestrictTo().execute('admin'),
    new StockController().remove)

export default router;