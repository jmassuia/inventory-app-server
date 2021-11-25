import { Router } from 'express';
import { SupplierController } from '../controllers/SupplierController';
import { Protect } from '../middleware/Protect';
import { RestrictTo } from '../middleware/RestrictTo';
const router = Router();

router.get('/', 
    new SupplierController().index)

router.post('/',new SupplierController().create)

router.patch('/:id',
    new Protect().execute, 
    new RestrictTo().execute('admin'),
    new SupplierController().update)

router.delete('/:id',
    new Protect().execute,
    new RestrictTo().execute('admin'),
    new SupplierController().remove)

export default router;